import React from 'react'
const str="Hi, I am Deepak, a student of 3rd year Electrical and Electronics Engineering at Karpagam College of Engineering. I am a programming enthusiast with a keen interest in web development and a passion for technology. Additionally, I have experience as a freelancer in photo and video editing, which has allowed me to gain a diverse set of skills. Furthermore, I have a strong interest in stocks and have gained knowledge about it. Follow my journey as I go through college and pursue my passions for technology, media and finance.";
const spl=str.split(" ");
const WordCount = () => {
    const noOfWords=spl.length;
  return (
    <div>Number of words in about = {noOfWords}</div>
  );
}

export default WordCount;