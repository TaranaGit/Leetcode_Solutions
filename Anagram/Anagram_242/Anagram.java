package com.example.Anagram_242;

public class Anagram {
    private String word1 = "alphabet";
    private String word2 = "tebahpla";
    private int[] count = new int[26];

    public boolean checkAnagram(){
        if(word1.length() != word2.length()){ // if lengths are different, not anagram
            return false;
        }
        for(int i=0; i<word1.length(); i++){
            count[word1.charAt(i) - 'a']++;
            count[word2.charAt(i)-'a']--;
        }
        for(int i = 0; i<count.length; i++){
           if(count[i]!=0){ // if mismatch found - not anagram
               return false;
           }
        }
        return  true; // All counts match - they are anagram
    }
}
