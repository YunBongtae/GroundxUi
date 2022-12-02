export enum KeypadType {
  NORMAL = 'normal',
  OTP = 'otp',
}

export type KeyStringType = string | number | 'delete;'
export type ShuffleKeyArrayType = (string | number)[]

interface TypeObjectElement {
  className: KeypadType
  keyStringArray: KeyStringType[]
}

export type KeypadObjectInterface = Record<KeypadType, TypeObjectElement>

export interface NumberKeypadInterface {
  buttonClick: (number: number | string) => void
  removeButtonClick: () => void
  type: KeypadType
  customKeyArray?: (number | string)[]
}

export interface KeypadButtonInterface
  extends Pick<NumberKeypadInterface, 'buttonClick' | 'removeButtonClick'> {
  keyString: KeyStringType
  type: KeypadType
}
