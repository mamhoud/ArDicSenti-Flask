# ArDicSenti 
ArDicSenti 
: Is a lexicon that help Developer in Sentiment analysis , there are more than one lexicon for this aim but we make it OPen and it for arabic , 
we make user in and allowed others to make contribution , it made by python Flask after upgrade from Djanngo Python too , There is no one common Arabic lexicon dictionary, annotated with the polarity, that can be used as a basic start for Ar sentiment analysis projects
# What Benifits Project Offers : 
1. Public on the Cloud .
2. High level confidence granted .
3. Easy to use – download or as a service .
4. Flexibility.
## ArDicSenti Technichal :
You can see the project in bleumix cloud in Some text with [ArDicSenti][1].
## Project overView
1. At first we try to get the raw of words because in arabic there are many words that has more than one meaning so we make steming for all words and try to use an algorithm to see the probablity of this word `How Much` it positive or negative or missleading or Senseless  . 
2. And after doing this we work with users Contributions , As user can say this word seems to be positive so the positive percentage will growth Up and so on . 
3. Now we come to the Download Stage You Choose the percentages of words that you want to download and you can Make A Threshold to Votes in Words you need .
**Thats may Help You to Know how Our project Work **

## How ArDicSenti work 
the main file is myapp.py file is working with all ( Design Templates , Excels Files , CsvFiles )
###What You need To Run this Project in Your machine :
1. You need to setup Packages :
  * flask
  * nltk (Isri)
  * xlsxwriter
  * xlrd
  * openpyxl
  * pandas
  * zipfile
2. Know how Functions Work :
  * stemer Function it take a word and get The Raw of this word 
  * add_word Function it is responsabile it to add new words to the Excel Sheet .
  * createFile Function this Funtion Creat the intermidate file if it's not found .
  * contr_step1 this Function is take every word from the sheet and make a random generation for all this words to take contrabutions from users about this word if it's ( Positive , Negative , Missleading ,or senseless ).
  * contr_step_2 Function is the function which co-operate with ajax to increase the rate of this four categories (Posistive , Negative , Missleading , Senseless ) .
  * search Function This function need a word as input and it search for it and return it's index in sheet .
  * file_generator Function this function make all work to Prepare The files which the user select to download it need the Catigories Percentages . 
  * download_file Function this function it take the files that generates from file_generator function and add download them co-operate with zip-file Function .

## What We Need 
We need more contribution and more Arabic words that allowed us to generate more a very good lexicon So Fork and Colne the project , to add new words .
## Future Work 
1. We will make to work with Phrases not only words .
2. Visualization side 
3. Make sentiment That working with this project .

`This Project is made in Ibm internship .`

[1]: https://ardicsenti-flask.eu-gb.mybluemix.net/
