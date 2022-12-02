import { css, SerializedStyles } from '@emotion/react'

export type ValueOf<T> = T[keyof T]

export interface IconInterface {
  width?: string
  height?: string
  onClick?: () => void
  styles?: SerializedStyles
}

// https://www.figma.com/file/eGbh85DjdV0P39buDmUPLp/Klip-Design-System-v2.0?node-id=3113%3A1794
export const ColorSystem = {
  blue100: '#0055DA',
  blue200: '#216FEA',
  blue300: '#3382FF',
  blue400: '#51A0FF',
  blue100Gradient: 'linear-gradient(91.49deg, #0055DA 0%, #216FEA 100%)',
  blue200Gradient: 'linear-gradient(91.49deg, #216FEA 0%, #3382FF 100%)',
  black100: '#171B1D',
  black100A80: 'rgba(23, 27, 29, 0.8)',
  black100A50: 'rgba(23, 27, 29, 0.5)',
  black100A30: 'rgba(23, 27, 29, 0.3)',
  black100A10: 'rgba(23, 27, 29, 0.1)',
  black100A8: 'rgba(23, 27, 29, 0.08)',
  black100A4: 'rgba(23, 27, 29, 0.04)',
  blackDimmed: 'rgba(0, 0, 0, 0.8)',
  gray100: '#333A3D',
  gray200: '#5C6164',
  gray300: '#747E83',
  gray400: '#8A979E',
  gray500: '#A1ACB1',
  gray600: '#C3CED3',
  gray700: '#E2EAEE',
  gray800: '#F1F7F9',
  gray900: '#F8FAFB',
  gray100A70: 'rgba(51, 58, 61, 0.7)',
  gray100A40: 'rgba(51, 58, 61, 0.4)',
  white100: '#FFF',
  white100A70: 'rgba(255, 255, 255, 0.7)',
  white100A40: 'rgba(255, 255, 255, 0.4)',
  white100A20: 'rgba(255, 255, 255, 0.2)',
  white100A8: 'rgba(255, 255, 255, 0.08)',
  white100A4: 'rgba(255, 255, 255, 0.04)',
  red100: '#F03465',
  red200: '#FF5883',
  red100A70: 'rgba(240, 52, 101, 0.7)',
  yellow100: '#FAE100',
} as const

export type ColorSystemValueTypes = ValueOf<typeof ColorSystem>

export const ButtonTypes = {
  Primary: 'Primary',
  PrimaryGradient: 'PrimaryGradient',
  PrimaryLine: 'PrimaryLine',
  PrimaryLineRound: 'PrimaryLineRound',
  Secondary: 'Secondary',
  SecondaryLine: 'SecondaryLine',
  SecondaryLineRound: 'SecondaryLineRound',
  Kakao: 'Kakao',
} as const

export type ButtonTypesValueTypes = ValueOf<typeof ButtonTypes>

export const ButtonSizes = {
  Large: 56,
  Medium: 48,
  Small: 44,
  Tiny: 32,
} as const

export type ButtonSizesValueTypes = ValueOf<typeof ButtonSizes>

export const ButtonStyles: Record<ButtonTypesValueTypes, SerializedStyles> = {
  PrimaryGradient: css`
    color: ${ColorSystem.white100};
    background: ${ColorSystem.blue200Gradient};
    box-shadow: 0 2px 8px rgba(0, 85, 218, 0.2);
    &:active {
      background: ${ColorSystem.blue100Gradient};
    }
    &:disabled {
      color: ${ColorSystem.white100};
      background: ${ColorSystem.gray600};
    }
  `,
  Primary: css`
    color: ${ColorSystem.white100};
    background-color: ${ColorSystem.blue200};
    &:active {
      background-color: ${ColorSystem.blue100};
    }
    &:disabled {
      color: ${ColorSystem.white100};
      background-color: ${ColorSystem.gray600};
    }
  `,
  PrimaryLine: css`
    color: ${ColorSystem.blue300};
    border: 1px solid ${ColorSystem.blue300};
    background-color: ${ColorSystem.white100};
    &:active {
      border: 1px solid ${ColorSystem.blue200};
    }
    &:disabled {
      color: ${ColorSystem.gray600};
      border: 1px solid ${ColorSystem.gray700};
    }
  `,
  PrimaryLineRound: css`
    color: ${ColorSystem.blue300};
    border: 1px solid ${ColorSystem.blue300};
    background-color: ${ColorSystem.white100};
    border-radius: 16px;
    &:active {
      border: 1px solid ${ColorSystem.blue200};
    }
    &:disabled {
      color: ${ColorSystem.gray600};
      border: 1px solid ${ColorSystem.gray700};
    }
  `,
  Secondary: css`
    color: ${ColorSystem.white100};
    background-color: ${ColorSystem.gray100};
    &:active {
      background-color: ${ColorSystem.black100};
    }
    &:disabled {
      color: ${ColorSystem.white100};
      background-color: ${ColorSystem.gray600};
    }
  `,
  SecondaryLine: css`
    color: ${ColorSystem.gray100A70};
    border: 1px solid ${ColorSystem.gray600};
    background-color: ${ColorSystem.white100};
    &:active {
      border: 1px solid ${ColorSystem.gray500};
    }
    &:disabled {
      color: ${ColorSystem.gray600};
      border: 1px solid ${ColorSystem.gray700};
    }
  `,
  SecondaryLineRound: css`
    color: ${ColorSystem.gray100A70};
    border: 1px solid ${ColorSystem.gray600};
    background-color: ${ColorSystem.white100};
    border-radius: 16px;
    &:active {
      border: 1px solid ${ColorSystem.gray500};
    }
    &:disabled {
      color: ${ColorSystem.gray600};
      border: 1px solid ${ColorSystem.gray700};
    }
  `,
  Kakao: css`
    color: ${ColorSystem.black100};
    background-color: ${ColorSystem.yellow100};
    img {
      width: 14px;
      height: 14px;
    }
  `,
} as const

export type ButtonStylesValueTypes = ValueOf<typeof ButtonStyles>

const FontWeight = {
  Bold: '700',
  Regular: '400',
} as const

type FontWeightValues = ValueOf<typeof FontWeight>

const createFontCss = (
  weight: FontWeightValues,
  size: number,
  lineHeight: number,
  letterSpacing: number,
  underLine?: boolean,
) => css`
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}px;
  letter-spacing: ${letterSpacing}em;
  ${underLine && 'text-decoration-line: underline;'};
`

// https://www.figma.com/file/eGbh85DjdV0P39buDmUPLp/Klip-Design-System-v2.0?node-id=3113%3A1794
export const FontSystem = {
  body20Bold: createFontCss(FontWeight.Bold, 20, 30, -0.0075),
  body20Regular: createFontCss(FontWeight.Regular, 20, 30, -0.0075),
  body18Bold: createFontCss(FontWeight.Bold, 18, 26, -0.0068),
  body18Regular: createFontCss(FontWeight.Regular, 18, 26, -0.0068),
  body16Bold: createFontCss(FontWeight.Bold, 16, 24, -0.006),
  body16Regular: createFontCss(FontWeight.Regular, 16, 24, -0.006),
  body14Bold: createFontCss(FontWeight.Bold, 14, 20, -0.0053),
  body14Regular: createFontCss(FontWeight.Regular, 14, 20, -0.0053),
  body14RegularUnderline: createFontCss(
    FontWeight.Regular,
    14,
    20,
    -0.0053,
    true,
  ),
  body12Bold: createFontCss(FontWeight.Bold, 12, 18, -0.002),
  body12Regular: createFontCss(FontWeight.Regular, 12, 18, -0.002),
  body12RegularUnderline: createFontCss(
    FontWeight.Regular,
    12,
    18,
    -0.002,
    true,
  ),
  num32Regular: createFontCss(FontWeight.Regular, 32, 32, 0),
  num28Bold: createFontCss(FontWeight.Bold, 28, 42, 0),
  num28Regular: createFontCss(FontWeight.Regular, 28, 42, 0),
  num24Bold: createFontCss(FontWeight.Bold, 24, 36, 0),
  num24Regular: createFontCss(FontWeight.Regular, 24, 36, 0),
  num20Bold: createFontCss(FontWeight.Bold, 20, 30, 0),
  num20Regular: createFontCss(FontWeight.Regular, 20, 30, 0),
  num18Bold: createFontCss(FontWeight.Bold, 18, 26, 0),
  num18Regular: createFontCss(FontWeight.Regular, 18, 26, 0),
  num16Bold: createFontCss(FontWeight.Bold, 16, 24, 0),
  num16Regular: createFontCss(FontWeight.Regular, 16, 24, 0),
  num14Bold: createFontCss(FontWeight.Bold, 14, 20, 0),
  num14Regular: createFontCss(FontWeight.Regular, 14, 20, 0),
  num12Bold: createFontCss(FontWeight.Bold, 12, 18, 0),
  num12Regular: createFontCss(FontWeight.Regular, 12, 18, 0),
  num11Bold: createFontCss(FontWeight.Bold, 11, 18, 0),
  num11Regular: createFontCss(FontWeight.Regular, 11, 18, 0),
} as const

export type FontSystemValueTypes = ValueOf<typeof FontSystem>
