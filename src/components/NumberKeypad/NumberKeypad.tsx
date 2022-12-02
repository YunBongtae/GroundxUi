import React, { useMemo } from 'react'
import {
  NumberKeypadInterface,
  KeyStringType,
  KeypadType,
  KeypadObjectInterface,
} from './numberKeypadInterface'
import KeypadButton from './KeypadButton'
import { NumberKeypadWrapper } from './style/numberKeypadStyle'

const KeypadObject: KeypadObjectInterface = {
  normal: {
    className: KeypadType.NORMAL,
    keyStringArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'delete'],
  },
  otp: {
    className: KeypadType.OTP,
    keyStringArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'delete'],
  },
}

const NumberKeypad = ({
  buttonClick,
  removeButtonClick,
  type,
  customKeyArray,
}: NumberKeypadInterface) => {
  const keyPad = useMemo(() => {
    if (customKeyArray) {
      return customKeyArray.map((keyString: KeyStringType) => (
        <KeypadButton
          key={keyString}
          buttonClick={buttonClick}
          removeButtonClick={removeButtonClick}
          keyString={keyString}
          type={type}
        />
      ))
    }
    return KeypadObject[type].keyStringArray.map((keyString: KeyStringType) => (
      <KeypadButton
        key={keyString}
        buttonClick={buttonClick}
        removeButtonClick={removeButtonClick}
        keyString={keyString}
        type={type}
      />
    ))
  }, [buttonClick, removeButtonClick, type, customKeyArray])

  return (
    <NumberKeypadWrapper data-cy="number-keypad">{keyPad}</NumberKeypadWrapper>
  )
}

export default NumberKeypad
