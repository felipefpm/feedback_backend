import { SubmitFeedbackUseCase } from './submit-feedback';

const createFeebackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeebackSpy },
  { sendMail: sendMailSpy }
);

describe('Submit feedback',() => {

  test('shoud be able to submit feddback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Teste comment',
      screenshot: 'data:image/png;base64,adasf1as6d5f165a1f651'
    })).resolves.not.toThrow();

    expect(createFeebackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  })

  test('shoud not be able to submit feddback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Teste comment',
      screenshot: 'data:image/png;base64,adasf1as6d5f165a1f651'
    })).rejects.toThrow();
  })

  test('shoud not be able to submit feddback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,adasf1as6d5f165a1f651'
    })).rejects.toThrow();
  })

  test('shoud not be able to submit feddback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Teste comment',
      screenshot: '123'
    })).rejects.toThrow();
  })

});