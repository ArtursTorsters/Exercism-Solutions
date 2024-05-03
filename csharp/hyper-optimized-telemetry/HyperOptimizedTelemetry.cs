using System;
using System.Collections.Generic;

public static class TelemetryBuffer
{
    private enum Prefix
    {
        Long = 248,
        Int = 252,
        Short = 254,
        UShort = 2,
        UInt = 4,
    }
    
    public static byte[] ToBuffer(long reading)
    {
        byte[] buffer = new byte[9];
        
        (Prefix prefix, byte[] valueBytes) = reading switch
        {
            >= long.MinValue and < int.MinValue     => (Prefix.Long, BitConverter.GetBytes(reading)),
            >= int.MinValue and < short.MinValue    => (Prefix.Int, BitConverter.GetBytes((int)reading)),
            >= short.MinValue and < 0               => (Prefix.Short, BitConverter.GetBytes((short)reading)),
            >= 0 and <= ushort.MaxValue             => (Prefix.UShort, BitConverter.GetBytes((ushort)reading)),
            > ushort.MaxValue and <= int.MaxValue   => (Prefix.Int, BitConverter.GetBytes((int)reading)),
            > int.MaxValue and <= uint.MaxValue     => (Prefix.UInt, BitConverter.GetBytes((uint)reading)),
            > uint.MaxValue and <= long.MaxValue    => (Prefix.Long, BitConverter.GetBytes(reading)),
        };

        buffer[0] = (byte)prefix;
        Array.Copy(valueBytes, 0, buffer, 1, valueBytes.Length);
        return buffer;
    }

    public static long FromBuffer(byte[] buffer)
        => (Prefix)buffer[0] switch
        {
            Prefix.Short => BitConverter.ToInt16(buffer, 1),       
            Prefix.UShort => BitConverter.ToUInt16(buffer, 1),
            Prefix.Int => BitConverter.ToInt32(buffer, 1),
            Prefix.UInt => BitConverter.ToUInt32(buffer, 1),
            Prefix.Long => BitConverter.ToInt64(buffer, 1),
            _ => 0,
        };
}
