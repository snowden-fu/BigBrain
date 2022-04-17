/*
 For a given data structure of a question, produce another
 object that doesn't contain any important meta data (e.g. the answer)
 to return to a "player"
*/
export const quizQuestionPublicReturn = question => {
  // {
  //   content: "",
  //   points: 10,
  //   type: "multiple",
  //   time: 10
  //   media: {
  //       type:
  //       data:
  //   },
  //   options: [
  //   {
  //      id:  1
  //      content: "this is a dog"
  //   }
  //   ],
  //  answers: []
  // }
  delete question.answers;
  return question;
};

/*
 For a given data structure of a question, get the IDs of
 the correct answers (minimum 1).
*/
export const quizQuestionGetCorrectAnswers = question => {
  return question.answers
};

/*
 For a given data structure of a question, get the IDs of
 all of the answers, correct or incorrect.
*/
export const quizQuestionGetAnswers = question => {
  return question.options.map(op => op.id);
};

/*
 For a given data structure of a question, get the duration
 of the question once it starts. (Seconds)
*/
export const quizQuestionGetDuration = question => {
  return question.time;
};
