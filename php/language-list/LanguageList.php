<?php

function language_list(...$langs)
{
    return $langs;
}

function add_to_language_list($lang_list, $lang) 
{    
    $lang_list[] = $lang;
    return $lang_list;
}

function prune_language_list($lang_list) 
{
    array_shift($lang_list);
    return $lang_list;
}

function current_language($lang_list)
{
    return $lang_list[0];
}

function language_list_length($lang_list)
{
    return count($lang_list);
}