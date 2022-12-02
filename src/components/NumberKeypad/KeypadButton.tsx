import React, { useCallback, useState } from 'react'

import {
  KeyStringType,
  KeypadButtonInterface,
} from './numberKeypadInterface'
import {
  ButtonText,
  Circle,
  KeyButton,
} from './style/numberKeypadStyle'

const KeypadButton = ({
  buttonClick,
  removeButtonClick,
  keyString,
  type,
}: KeypadButtonInterface) => {
  const isDeleteKey = useCallback((str: KeyStringType) => {
    return str === 'delete'
  }, [])
  const isEmptyKey = useCallback((str: KeyStringType) => {
    return str === ''
  }, [])

  const [touchFlag, setTouchFlag] = useState(false)
  const [timeoutKey, setTimeoutKey] = useState<ReturnType<
    typeof setTimeout
  > | null>(null)

  const keypadButtonAction = () => {
    setTouchFlag(true)
    if (timeoutKey !== null) clearTimeout(timeoutKey)
    setTimeoutKey(setTimeout(() => setTouchFlag(false), 400))
  }

  return (
    <KeyButton
      data-cy={`keyButton-${keyString}`}
      onClick={
        isDeleteKey(keyString)
          ? removeButtonClick
          : () => buttonClick(keyString)
      }
      onTouchStart={keypadButtonAction}
      imgUrl={isDeleteKey(keyString)}
      keypadType={type}
    >
      {!isDeleteKey(keyString) && <ButtonText>{keyString}</ButtonText>}
      {!isEmptyKey(keyString) && (
        <Circle touchFlag={touchFlag} keypadType={type} />
      )}
    </KeyButton>
  )
}

export default KeypadButton
