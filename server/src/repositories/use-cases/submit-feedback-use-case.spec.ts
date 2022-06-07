/*test('sum 2 + 2', () => {
  expect(2 + 2).toBe(4)
});*/

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedback = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  {create: createFeedback }, //Funções vazias
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
    })).resolves.not.toThrow();

    expect(createFeedback).toHaveBeenCalled()//Testa se foi chamada a função
    expect(sendMailSpy).toHaveBeenCalled()
  })
})