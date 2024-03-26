const shouting = (message: string): boolean => {
  return message.toUpperCase() === message && message.toLowerCase() !== message;
};

const asking = (message: string): boolean => {
  return message.trim().endsWith('?');
};

const silent = (message: string): boolean => {
  return message.trim() === '';
};

export const hey = (message: string): string => {
  if(shouting(message) && asking(message)) {
    return "Calm down, I know what I'm doing!";
  }
  else if(shouting(message)) {
    return 'Whoa, chill out!';
  }
  else if(asking(message)) {
    return 'Sure.';
  }
  else if(silent(message)) {
    return 'Fine. Be that way!';
  }
  else {
    return 'Whatever.';
  }
};
