<?php

class PizzaPi
{
    public function calculateDoughRequirement($pizzas, $persons)
    {
        return $pizzas * (($persons * 20) + 200);
    }

    public function calculateSauceRequirement($pizzas, $can_capacity)
    {
        return ($pizzas * 125) / $can_capacity;
    }

    public function calculateCheeseCubeCoverage($cube_side, $thickness, $diameter)
    {
        return floor(($cube_side ** 3) / ($thickness * pi() * $diameter));
    }

    public function calculateLeftOverSlices($pizzas, $friends)
    {
        return ($pizzas * 8) % $friends;
    }
}
