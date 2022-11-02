import { theme } from "../../Styles/theme";
import styled from "@emotion/styled/macro";

export default function Icon(props) {
  const { type, button, size } = props;
  const { palette } = theme;

  const SvgStyle = styled.svg`
    fill: ${(button === "primary" && palette.interactive.primary.default) ||
    (button === "secondary" && "green")};
  `;

  function handleColorChange(button) {
    const Primary = {};
    if (button === "primary") {
      return palette.white;
    } else if (
      button === "primaryInverse" ||
      button === "secondary" ||
      button === "secondaryInverse" ||
      button === "ghostPrimary"
    ) {
      return palette.interactive.primary.default;
    } else if (button === "ghostNeutral") {
      return palette.black;
    }
  }

  function handleSizeChange(size) {
    if (size === "sm") {
      return 16;
    } else if (size === "md") {
      return 20;
    } else {
      return 24;
    }
  }

  const search = (
    <svg
      width={handleSizeChange(size)}
      height={handleSizeChange(size)}
      viewBox='0 0 16 14'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
        transform='translate(-293.000000, -23.000000)'
      >
        <g fill={handleColorChange(button)}>
          <g transform='translate(293.000000, 22.000000)'>
            <path d='M11.355485,11.4503883 L16.0066609,16.1015642 L15.1015642,17.0066609 L10.4503883,12.355485 C9.34711116,13.2583262 7.93681293,13.8 6.4,13.8 C2.8653776,13.8 0,10.9346224 0,7.4 C0,3.8653776 2.8653776,1 6.4,1 C9.9346224,1 12.8,3.8653776 12.8,7.4 C12.8,8.93681293 12.2583262,10.3471112 11.355485,11.4503883 Z M6.4,12.52 C9.22769792,12.52 11.52,10.2276979 11.52,7.4 C11.52,4.57230208 9.22769792,2.28 6.4,2.28 C3.57230208,2.28 1.28,4.57230208 1.28,7.4 C1.28,10.2276979 3.57230208,12.52 6.4,12.52 Z'></path>
          </g>
        </g>
      </g>
    </svg>
  );

  const arrowPrev = (
    <svg
      aria-labelledby='cds-142-title'
      fill='none'
      focusable='false'
      width={handleSizeChange(size)}
      height={handleSizeChange(size)}
      role='img'
      viewBox='0 0 20 20'
      className='icon css-0'
      id='cds-142'
    >
      <title id='cds-142-title'>Medium</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.207 10.5l7.147 7.146-.708.708L1.293 10l8.353-8.354.708.708L3.207 9.5H18v1H3.207z'
        fill={handleColorChange(button)}
      ></path>
    </svg>
  );

  const arrowNext = (
    <SvgStyle
      aria-labelledby='cds-136-title'
      focusable='false'
      height={handleSizeChange(size)}
      width={handleSizeChange(size)}
      role='img'
      viewBox='0 0 20 20'
      className='icon css-0'
      id='cds-136'
    >
      <title id='cds-136-title'>Medium</title>
      <path
        fill={handleColorChange(button)}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.793 9.5L9.646 2.354l.708-.708L18.707 10l-8.353 8.354-.708-.707 7.147-7.147H2v-1h14.793z'
      ></path>
    </SvgStyle>
  );

  const chevronPrev = (
    <svg
      aria-labelledby='cds-164-title'
      fill={handleColorChange(button)}
      focusable='false'
      height={handleSizeChange(size)}
      width={handleSizeChange(size)}
      role='img'
      viewBox='0 0 24 24'
      id='cds-164'
    >
      <title id='cds-164-title'>Large</title>
      <path
        strokeWidth='2'
        stroke={handleColorChange(button)}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.707 12L17.354 1.354l-.707-.708L5.293 12l11.354 11.354.707-.707L6.707 12z'
        fill={handleColorChange(button)}
      ></path>
    </svg>
  );

  const chevronNext = (
    <svg
      aria-labelledby='cds-158-title'
      fill={handleColorChange(button)}
      focusable='false'
      height={handleSizeChange(size)}
      width={handleSizeChange(size)}
      role='img'
      viewBox='0 0 24 24'
      className='icon css-0'
      id='cds-158'
    >
      <title id='cds-158-title'>Large</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.293 12L6.646 1.354l.708-.708L18.707 12 7.354 23.354l-.708-.707L17.293 12z'
      ></path>
    </svg>
  );

  const chevronDown = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-chevron-down'
      width={handleSizeChange(size)}
      height={handleSizeChange(size)}
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke={handleColorChange(button)}
      fill='none'
      strokeLinecap='butt'
      strokeLinejoin='butt'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <polyline points='6 9 12 15 18 9'></polyline>
    </svg>
  );

  const coursera = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1155 164'
      fillRule='evenodd'
      clipRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='2'
      width='170px'
    >
      <path
        d='M159.75 81.54c0-44.49 36.63-80.47 82.43-80.47 46.12 0 82.76 36 82.76 80.47 0 44.16-36.64 80.8-82.76 80.8-45.8 0-82.43-36.68-82.43-80.8zm125.61 0c0-22.24-19.3-41.87-43.18-41.87-23.55 0-42.85 19.63-42.85 41.87 0 22.57 19.3 42.2 42.85 42.2 23.92 0 43.18-19.63 43.18-42.2zm705.63 1.31c0-48.74 39.58-81.78 75.57-81.78 24.53 0 38.6 7.52 48.08 21.92l3.77-19h36.79v155.4h-36.79l-4.75-16c-10.79 11.78-24.21 19-47.1 19-35.33-.05-75.57-31.13-75.57-79.54zm125.61-.33c-.09-23.527-19.47-42.835-43-42.835-23.59 0-43 19.411-43 43v.165c0 21.59 19.3 40.89 42.86 40.89 23.85 0 43.14-19.3 43.14-41.22zM945.78 22V4h-40.23v155.39h40.23V75.66c0-25.19 12.44-38.27 34-38.27 1.43 0 2.79.1 4.12.23L991.36.11c-20.97.11-36.17 7.3-45.58 21.89zm-404.27.01v-18l-40.23.09.34 155.37 40.23-.09-.22-83.72c-.06-25.18 12.35-38.29 33.93-38.34 1.376.004 2.752.081 4.12.23L587.1 0c-21 .17-36.22 7.39-45.59 22.01zM338.88 99.2V4.01h40.22V94.3c0 19.95 11.12 31.73 30.42 31.73 21.59 0 34-13.09 34-38.28V4.01h40.24v155.38h-40.21v-18c-9.48 14.72-24.86 21.92-46.12 21.92-35.98.01-58.55-26.16-58.55-64.11zm391.74-17.48c.09-43.51 31.23-80.74 80.62-80.65 45.8.09 78.11 36.78 78 80 .01 4.273-.33 8.54-1 12.76l-118.41-.22c4.54 18.65 19.89 32.09 43.12 32.14 14.06 0 29.12-5.18 38.3-16.94l27.44 22c-14.11 19.93-39 31.66-65.48 31.61-46.75-.16-82.67-35.23-82.59-80.7zm118.12-16.14c-2.26-15.7-18.59-27.84-37.89-27.87-18.65 0-33.71 11.06-39.63 27.73l77.52.14zm-261.4 59.94l35.76-18.72c5.91 12.81 17.73 20.36 34.48 20.36 15.43 0 21.34-4.92 21.34-11.82 0-25-84.71-9.85-84.71-67 0-31.52 27.58-48.26 61.72-48.26 25.94 0 48.92 11.49 61.4 32.83l-35.44 18.75c-5.25-10.51-15.1-16.42-27.58-16.42-12.14 0-18.06 4.27-18.06 11.49 0 24.3 84.71 8.87 84.71 67 0 30.21-24.62 48.59-64.35 48.59-33.82-.03-57.46-11.19-69.27-36.8zM0 81.54C0 36.73 36.63.74 82.43.74c27.947-.196 54.182 13.737 69.67 37l-34.34 19.92a42.972 42.972 0 00-35.33-18.32c-23.55 0-42.85 19.63-42.85 42.2 0 22.57 19.3 42.2 42.85 42.2a42.502 42.502 0 0036.31-20l34 20.28c-15.307 23.955-41.902 38.431-70.33 38.28C36.63 162.34 0 125.66 0 81.54z'
        fill={handleColorChange(button)}
        fillRule='nonzero'
      />
    </svg>
  );

  const menu = (
    <svg
      aria-labelledby='cds-462-title'
      fill='none'
      focusable='false'
      height={handleSizeChange(size)}
      width={handleSizeChange(size)}
      role='img'
      viewBox='0 0 24 24'
      className='icon css-0'
      id='cds-462'
    >
      <title id='cds-462-title'>Large</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22 13H2v-2h20v2zM22 6H2V4h20v2zM22 20H2v-2h20v2z'
        fill={handleColorChange(button)}
      ></path>
    </svg>
  );

  const degree = (
    <svg
      fill={handleColorChange(button)}
      focusable='false'
      height={handleSizeChange(size)}
      width={handleSizeChange(size)}
      role='img'
      viewBox='0 0 16 16'
      className='icon css-0'
      id='cds-768'
    >
      <title id='cds-768-title'>Small</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.9 2.437L14.765 6 7.9 9.563 1.035 6 7.9 2.437zM3.205 6L7.9 8.437 12.595 6 7.9 3.563 3.205 6z'
        fill={handleColorChange(button)}
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.5 9.67V7.5h1v2.17c0 .341.198.704.627 1.002.427.297 1.047.498 1.763.498s1.336-.201 1.763-.498c.43-.298.627-.66.627-1.002V7.5h1v2.17c0 .759-.442 1.396-1.056 1.823-.615.428-1.44.677-2.334.677-.894 0-1.719-.249-2.334-.677C4.942 11.066 4.5 10.429 4.5 9.67z'
        fill={handleColorChange(button)}
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.456 5.77a.5.5 0 01.675-.214l5.14 2.67a.5.5 0 01.269.444v1.66a.5.5 0 11-1 0V8.974l-4.87-2.53a.5.5 0 01-.214-.674z'
        fill={handleColorChange(button)}
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.37 9.723a1.5 1.5 0 012.13 1.667v3.11h-2.93v-3.11a1.5 1.5 0 01.8-1.667zm.665.845a.5.5 0 00-.482.63l.017.065V13.5h.93v-2.237l.018-.064a.5.5 0 00-.483-.631z'
        fill={handleColorChange(button)}
      ></path>
    </svg>
  );

  const credit = (
    <svg
      fill={handleColorChange(button)}
      focusable='false'
      height={handleSizeChange(size)}
      width={handleSizeChange(size)}
      role='img'
      viewBox='0 0 16 16'
      className='icon css-0'
      id='cds-306'
    >
      <title id='cds-306-title'>Small</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M.53 2.5h14.94v11.04H.53V2.5zm1 1v9.04h12.94V3.5H1.53z'
        fill={handleColorChange(button)}
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.49 5.72a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM8.24 6.97a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z'
        fill={handleColorChange(button)}
      ></path>
      <path
        d='M9.27 8.27v3.05l1.22-.63 1.22.63V8.27H9.27z'
        fill={handleColorChange(button)}
      ></path>
    </svg>
  );

  const star = (
    <svg
      fill='none'
      focusable='false'
      height={handleSizeChange(size)}
      width={handleSizeChange(size)}
      role='img'
      viewBox='0 0 16 16'
      className='icon css-0'
      id='cds-1392'
    >
      <title id='cds-1392-title'>Small</title>
      <path
        d='M13.63 6.32h-4L8.3 2.22a.33.33 0 00-.547-.143.35.35 0 00-.083.123L6.32 6.32h-4a.34.34 0 00-.32.32.36.36 0 00.12.27L5.5 9.49l-1.3 4.08a.33.33 0 00.23.41.358.358 0 00.3-.05L8 11.39l3.28 2.54a.33.33 0 00.46 0 .3.3 0 00.06-.31l-1.31-4.13 3.37-2.58a.32.32 0 00.08-.45.34.34 0 00-.136-.112c-.055-.024-.063-.034-.123-.028h-.051z'
        fill={handleColorChange(button)}
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.723 1.525a.83.83 0 011.054.546L9.993 5.82h3.668a.635.635 0 01.317.058l.02.01.012.005a.84.84 0 01.336.275l.001.002a.82.82 0 01-.191 1.143l-3.083 2.36 1.2 3.786a.8.8 0 01-.166.81l-.009.01-.01.01a.83.83 0 01-1.131.023L8 12.022l-2.975 2.312-.012.008a.86.86 0 01-1.007-.026.832.832 0 01-.286-.885l.003-.013 1.194-3.744L1.8 7.296l-.014-.013a.86.86 0 01-.287-.645V6.61a.84.84 0 01.791-.79l.015-.001h3.652L7.2 2.029l.006-.016a.85.85 0 01.51-.485l.007-.003zM4.298 14.462h-.002l.134-.482-.132.482zM7.98 2.857L6.682 6.82H2.826l3.257 2.486-1.244 3.907 3.16-2.456 3.14 2.431-1.232-3.882 3.248-2.486H9.267L7.98 2.857zm5.75 3.96z'
        fill={handleColorChange(button)}
      ></path>
    </svg>
  );

  const remove = (
    <svg
      aria-labelledby='cds-5138-title'
      fill={handleColorChange(button)}
      focusable='false'
      height={handleSizeChange(size)}
      role='img'
      viewBox='0 0 24 24'
      width={handleSizeChange(size)}
      className='icon css-0'
      id='cds-5138'
    >
      <title id='cds-5138-title'>Large</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.646 22.354l-20-20 .708-.708 20 20-.707.708z'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.354 2.354l-20 20-.708-.708 20-20 .708.708z'
      ></path>
    </svg>
  );

  const triangle = (
    <svg
      id='triangle'
      viewBox='0 0 100 100'
      height={handleSizeChange(size)}
      width={handleSizeChange(size)}
      fill={handleColorChange(button)}
    >
      <polygon points='50 15, 100 100, 0 100' />
    </svg>
  );

  const share = (
    <svg aria-labelledby="cds-react-aria-43-title" fill="none" focusable="false" height={handleSizeChange(size)} role="img" viewBox="0 0 16 16" width={handleSizeChange(size)} id="cds-react-aria-43"><title id="cds-react-aria-43-title">Small</title><path fillRule="evenodd" clipRule="evenodd" d="M12.62 2.5a.88.88 0 100 1.76.88.88 0 000-1.76zm-1.88.88a1.88 1.88 0 11.645 1.417L5.778 8l5.607 3.203a1.88 1.88 0 11-.553.836L5.099 8.762a1.88 1.88 0 110-1.526l5.733-3.275a1.88 1.88 0 01-.092-.582zM4.22 7.738a.88.88 0 100 .524L3.762 8l.458-.262zm8.4 4.002a.88.88 0 100 1.76.88.88 0 000-1.76z" fill={handleColorChange(button)}></path></svg>
  )

  const bookmark = (
    <svg aria-labelledby="cds-react-aria-667-title" fill="none" focusable="false" height={handleSizeChange(size)} role="img" viewBox="0 0 16 16" width={handleSizeChange(size)} id="cds-react-aria-667"><title id="cds-react-aria-667-title">Small</title><path fillRule="evenodd" clipRule="evenodd" d="M3.5.5h9V16L8 12.625 3.5 16V.5zm1 1V14L8 11.375 11.5 14V1.5h-7z" fill={handleColorChange(button)}></path></svg>
  )

  const check = (
    <svg aria-labelledby="cds-react-aria-781-title" fill="none" focusable="false" height={handleSizeChange(size)} role="img" viewBox="0 0 16 16" width={handleSizeChange(size)} id="cds-react-aria-781"><title id="cds-react-aria-781-title">Small</title><path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill={handleColorChange(button)}></path></svg>
  )

  const comment = (
    <svg aria-labelledby="cds-react-aria-115-title" fill="none" focusable="false" height={handleSizeChange(size)} role="img" viewBox="0 0 16 16" width={handleSizeChange(size)} id="cds-react-aria-115"><title id="cds-react-aria-115-title">Small</title><path fillRule="evenodd" clipRule="evenodd" d="M3.983 1.5h8.034l.017.001a2.65 2.65 0 012.465 2.465l.001.017v5.084l-.001.017a2.65 2.65 0 01-2.465 2.465l-.017.001H6.21l-2.468 2.525c-.372.4-.934.511-1.408.324-.502-.199-.834-.695-.834-1.349V3.983l.001-.017a2.65 2.65 0 012.465-2.465l.017-.001zm.035 1A1.65 1.65 0 002.5 4.018v9.032c0 .296.128.39.201.419a.282.282 0 00.311-.077l.005-.006L5.79 10.55h6.192A1.65 1.65 0 0013.5 9.032V4.018A1.65 1.65 0 0011.982 2.5H4.018z" fill={handleColorChange(button)}></path><path d="M10.7 7.36a.9.9 0 100-1.8.9.9 0 000 1.8zM5.3 7.36a.9.9 0 100-1.8.9.9 0 000 1.8zM8 7.36a.9.9 0 100-1.8.9.9 0 000 1.8z" fill={handleColorChange(button)}></path></svg>
  )

  const bell = (
    <svg aria-labelledby="cds-react-aria-865-title" fill="none" focusable="false" height={handleSizeChange(size)} role="img" viewBox="0 0 16 16" width={handleSizeChange(size)} id="cds-react-aria-865"><title id="cds-react-aria-865-title">Small</title><path d="M7.93 15.5c-.5 0-1-.18-1.38-.53-.63-.58-.76-1.5-.33-2.22l.15-.25h3.12l.15.24c.44.73.3 1.65-.33 2.23-.39.35-.88.53-1.38.53zm-.94-2c-.06.26.03.54.24.74.38.35 1.02.35 1.39 0 .22-.2.3-.47.25-.74H6.99z" fill={handleColorChange(button)}></path><path d="M13.56 13.5H2.45v-1.48c0-1.37.68-2.14 1.23-2.75.41-.46.66-.77.67-1.16V6.17c0-1.99 1.7-3.67 3.71-3.67 1.99 0 3.6 1.64 3.6 3.67v1.95c0 .39.26.69.67 1.15.55.62 1.23 1.38 1.23 2.75v1.48zm-10.11-1h9.11v-.48c0-.99-.47-1.52-.98-2.09-.45-.5-.91-1.02-.92-1.81V6.17C10.67 4.7 9.5 3.5 8.06 3.5c-1.44 0-2.71 1.25-2.71 2.67v1.95c-.01.79-.48 1.31-.92 1.81-.51.57-.98 1.11-.98 2.09v.48z" fill={handleColorChange(button)}></path><path d="M8.06 3.5c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5s.5.22.5.5v2c0 .28-.22.5-.5.5z" fill={handleColorChange(button)}></path></svg>
  )

  const correctAnswer = (
    <svg aria-labelledby="cds-react-aria-151-title" fill="none" focusable="false" height={handleSizeChange(size)} role="img" viewBox="0 0 16 16" width={handleSizeChange(size)} id="cds-react-aria-151"><title id="cds-react-aria-151-title">Small</title><path fillRule="evenodd" clipRule="evenodd" d="M1.5 6.5h3v3h-3v-3zm1 1v1h1v-1h-1zM1.5 11.5h3v3h-3v-3zm1 1v1h1v-1h-1zM14 8.5H7v-1h7v1zM14 13.5H7v-1h7v1zM14 3.5H7v-1h7v1zM6.354 1.354L3 4.707.646 2.354l.708-.708L3 3.293 5.646.646l.708.708z" fill={handleColorChange(button)}></path></svg>
  )

  const briefcase = (
    <svg aria-labelledby="cds-react-aria-370-title" fill="none" focusable="false" height={handleSizeChange(size)} role="img" viewBox="0 0 16 16" width={handleSizeChange(size)} id="cds-react-aria-370"><title id="cds-react-aria-370-title">Small</title><path fillRule="evenodd" clipRule="evenodd" d="M.5 3.5h15v10H.5v-10zm1 1v8h13v-8h-13z" fill={handleColorChange(button)}></path><path fillRule="evenodd" clipRule="evenodd" d="M3.61 13V4h1v9h-1zM11.39 13V4h1v9h-1zM6.94 2.707c-.193.16-.44.503-.44 1.293h-1c0-1.02.333-1.676.805-2.065A1.93 1.93 0 017.5 1.5h1c.242 0 .744.064 1.195.435.472.389.805 1.045.805 2.065h-1c0-.79-.247-1.134-.44-1.293A.932.932 0 008.5 2.5h-1a.932.932 0 00-.56.207z" fill={handleColorChange(button)}></path></svg>
  )

  const target = (
    <svg aria-labelledby="cds-react-aria-472-title" fill="none" focusable="false" height={handleSizeChange(size)} role="img" viewBox="0 0 16 16" width={handleSizeChange(size)} id="cds-react-aria-472"><title id="cds-react-aria-472-title">Small</title><path fillRule="evenodd" clipRule="evenodd" d="M6.49 7.8a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zm-2.7 1.7a2.7 2.7 0 115.4 0 2.7 2.7 0 01-5.4 0z" fill={handleColorChange(button)}></path><path fillRule="evenodd" clipRule="evenodd" d="M7.863 4.68a4.99 4.99 0 103.453 3.527.5.5 0 11.967-.254 5.99 5.99 0 11-4.146-4.234.5.5 0 11-.274.962zM13.473.12l.728 1.737 1.731.718-2.816 2.816-2.304-.125-.212-2.273L13.473.12zM11.64 3.367l.088.947.996.055 1.444-1.444-.73-.302-.311-.743-1.487 1.487z" fill={handleColorChange(button)}></path><path fillRule="evenodd" clipRule="evenodd" d="M11.626 4.439a.5.5 0 01-.005.707l-4.65 4.59a.5.5 0 01-.702-.712l4.65-4.59a.5.5 0 01.707.005z" fill={handleColorChange(button)}></path></svg>
  )

  const chevronDown2 = (
    <svg aria-labelledby="cds-react-aria-73-title" fill="none" focusable="false" height={handleSizeChange(size)} role="img" viewBox="0 0 16 16" width={handleSizeChange(size)} id="cds-react-aria-73"><title id="cds-react-aria-73-title">Small</title><path fillRule="evenodd" clipRule="evenodd" d="M8 11.293L1.354 4.646l-.708.708L8 12.707l7.354-7.353-.707-.708L8 11.293z" fill={handleColorChange(button)}></path></svg>
  )

  return (
    <>
      {type === "search" && search}
      {type === "arrowPrev" && arrowPrev}
      {type === "arrowNext" && arrowNext}
      {type === "chevronPrev" && chevronPrev}
      {type === "chevronNext" && chevronNext}
      {type === "chevronDown" && chevronDown}
      {type === "coursera" && coursera}
      {type === "menu" && menu}
      {type === "degree" && degree}
      {type === "credit" && credit}
      {type === "star" && star}
      {type === "remove" && remove}
      {type === "triangle" && triangle}
      {type === "share" && share}
      {type === "bookmark" && bookmark}
      {type === "check" && check}
      {type === "comment" && comment}
      {type === "bell" && bell}
      {type === "correctAnswer" && correctAnswer}
      {type === "briefcase" && briefcase}
      {type === "target" && target}
      {type === "chevronDown2" && chevronDown2}
    </>
  );
}
