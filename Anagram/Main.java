package com.example;

import com.example.Anagram_242.Anagram;
import com.example.SumOfTwoNums.SumofTwoNums;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
//        System.out.printf("Hello and welcome!");
// Excercise: Find out Anagram of two strings
        Anagram anagram = new Anagram();
        boolean result = anagram.checkAnagram();
        System.out.println(result);
// Exercixe: sum of two number is equal to target
        SumofTwoNums sumofTwoNums = new SumofTwoNums();
        int[] additionResult = sumofTwoNums.Summation(new int[]{15, 7, 11, 2}, 9);
        System.out.println(Arrays.toString(additionResult));
    }
}