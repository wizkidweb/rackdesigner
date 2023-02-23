import { Pipe, PipeTransform } from '@angular/core';

export type ErrorMessage = { key: string, error: Record<string, any> };

@Pipe({
  name: 'errorMsg'
})
export class ErrorMsgPipe implements PipeTransform {

  /**
   * A map of error messages. The key is the validator key, and the value is the message. Use `${num}` to match against error parameters.
   */
  private readonly MESSAGES: Record<string, string> = {
    required: 'This field is required.',
    min: 'The minimum length for this field is $1.',
    max: 'The maximum length for this field is $1.',
    pattern: 'The pattern for this field is invalid.',
  };

  /**
   * Processes the given error message value into a human-readable message.
   * @param value The error message to process.
   */
  transform(value: ErrorMessage): string {
    const errorParams = Object.values(value.error || {});
    let message = this.MESSAGES[value.key];

    if (message) {
      errorParams.forEach((param, i) => message = message.replace(`$${i+1}`, param as string))
      return message;
    } else {
      console.warn('No message found for error', value);
    }

    return '';
  }
}
