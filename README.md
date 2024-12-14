# EmergingTech

# Trigram Analysis and Text Generation

This project implements trigram analysis and text generation using Python. 
It processes multiple eBooks, generates trigrams, creates new text based on the trigram model, and analyzes the validity of generated words.

## Task Overview

The assignment consists of three main tasks:

1. **Trigram Analysis**: 
   - Read and process multiple eBooks
   - Clean text (keeping only letters, periods, and spaces)
   - Convert text to uppercase
   - Generate and counts trigrams

2. **Text Generation**:
   - Use trigram frequencies to generate new text
   - Implement weighted random selection
   - Generate a 10,000-character string

3. **Word Validity Analysis**:
   - Check generated words against a dictionary of English words
   - Calculates the percentage of valid English words in the generated text (i.e. 60% validity)

## Implementation Details

### Text Processing
- Removes all characters except letters, periods, and spaces
- Converts all text to uppercase

### Trigram Generation
- Creates trigrams by sliding a 3-character window through the text
- Maintains a count of trigram frequencies
- Handles text boundaries appropriately

### Text Generation Algorithm
- Starts with a starter text "TH"
- Uses weighted random selection based on trigram frequencies
- Continues generation until reaching 10,000 characters

### Word Validation
- Uses a provided words.txt dictionary
- Identifies valid English words in the generated text
- Calculates validity statistics

## Results
- Total words generated: 1511
- Valid English words: 506
- Percentage of valid English words: 33.49%

## Files
- `trigrams.ipynb`: Main Jupyter notebook containing all code and analysis
- Input files:
  - All provided eBook .txt files
  - words.txt (English word dictionary)

## References
- Learning about trigrams: (https://uwpce-pythoncert.github.io/ProgrammingInPython/exercises/trigrams/trigrams.html)
- Counting occurences of a word (https://stackoverflow.com/questions/65344366/how-to-count-occurrence-of-word-unigram-bigram-trigram-by-month)
- Not a reference but I kept seeing Yin and Yang when learning about trigrams. (I just thought that was interesting, not really relevant)
 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# ELIZA Chatbot

Implementation of Eliza Chatbot using JavaScript, HTML, and CSS

## Overview
This project is a recreation of the famous ELIZA chatbot, implementing pattern matching and response generation in JavaScript. This chatbot runs in the browser.

## Demo
You can find the chatbot here: (https://github.com/PatrickEBlack/EmergingTech/tree/main/eliza)

## Features
- Natural language pattern matching
- Dynamic response generation
- Modern, responsive interface
- No external dependencies
- Runs entirely in the browser

## Technical Details
- Built with vanilla JavaScript
- Uses regular expressions for pattern matching
- Implements a responsive design using CSS

## Limitations
- Set responses means there is little wiggle room for user input
- Some responses may seem like they are not accurate to the users input

## References
- Some of the JavaScript that I was not familiar with was found at: (https://www.w3schools.com/jsref/jsref_regexp_begin.asp)
- Very few of the design aspect of this chatbot were found at: (https://academy.quriobot.com/how-to-build-an-advanced-bot/css-customization-for-your-bot-design/)
- HTML is all of my design (Not that its very complex)

