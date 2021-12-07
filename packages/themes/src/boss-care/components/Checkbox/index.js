import { css } from 'styled-components';
import { body, borderRadius, colors, transition } from '../../styles';

import Typography from '../Typography';

export default {
  Indicator: {
    main: css`
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-top: 2px;
      margin-right: 12px;
      font-size: 24px;
      content: '';
      border-radius: ${borderRadius.small}px;
      box-shadow: inset 0 0 0 1px
        ${props => (props.color ? colors[props.color] || props.color : colors.gray[3])};
      transition: ${transition.all};

      input:active + & {
        box-shadow: inset 0 0 0 1px
          ${props => (props.color ? colors[props.color] || props.color : colors.gray[1])};
      }

      input:checked + & {
        box-shadow: inset 0 0 0 24px
          ${props => (props.color ? colors[props.color] || props.color : colors.gray[1])};
      }

      .error & {
        box-shadow: inset 0 0 0 1px ${colors.error};
      }

      .error input:checked + & {
        box-shadow: inset 0 0 0 24px ${colors.error};
      }

      svg {
        display: block;
        line-height: 1;

        path {
          fill: ${colors.gray[7]};
        }
      }
    `,
  },
  Label: {
    main: css`
      ${Typography.variants.body2};
      color: ${colors.gray[1]};
      user-select: none;
    `,
  },
  ErrorMessage: {
    main: css`
      display: flex;
      align-items: center;
      padding-top: 8px;
      font-family: ${body.fontFamily};
      font-size: 14px;
      color: ${colors.error};

      &::before {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 8px;
        content: '';
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDdDMTEuNzM0OCA3IDExLjQ4MDQgNy4xMDUzNiAxMS4yOTI5IDcuMjkyODlDMTEuMTA1NCA3LjQ4MDQzIDExIDcuNzM0NzggMTEgOFYxMkMxMSAxMi4yNjUyIDExLjEwNTQgMTIuNTE5NiAxMS4yOTI5IDEyLjcwNzFDMTEuNDgwNCAxMi44OTQ2IDExLjczNDggMTMgMTIgMTNDMTIuMjY1MiAxMyAxMi41MTk2IDEyLjg5NDYgMTIuNzA3MSAxMi43MDcxQzEyLjg5NDYgMTIuNTE5NiAxMyAxMi4yNjUyIDEzIDEyVjhDMTMgNy43MzQ3OCAxMi44OTQ2IDcuNDgwNDMgMTIuNzA3MSA3LjI5Mjg5QzEyLjUxOTYgNy4xMDUzNiAxMi4yNjUyIDcgMTIgN1pNMTIuOTIgMTUuNjJDMTIuODk4MSAxNS41NTYzIDEyLjg2NzkgMTUuNDk1NyAxMi44MyAxNS40NEwxMi43MSAxNS4yOUMxMi41Njk0IDE1LjE1MTIgMTIuMzkwOCAxNS4wNTcyIDEyLjE5NjggMTUuMDE5OUMxMi4wMDI4IDE0Ljk4MjUgMTEuODAyMSAxNS4wMDM0IDExLjYyIDE1LjA4QzExLjQ5ODggMTUuMTMwNiAxMS4zODcyIDE1LjIwMTcgMTEuMjkgMTUuMjlDMTEuMTk3MyAxNS4zODM0IDExLjEyNCAxNS40OTQzIDExLjA3NDIgMTUuNjE2MUMxMS4wMjQ1IDE1LjczNzkgMTAuOTk5MiAxNS44Njg0IDExIDE2QzExLjAwMTYgMTYuMTMwNyAxMS4wMjg4IDE2LjI1OTggMTEuMDggMTYuMzhDMTEuMTI0OSAxNi41MDQxIDExLjE5NjYgMTYuNjE2OCAxMS4yODk5IDE2LjcxMDFDMTEuMzgzMiAxNi44MDM0IDExLjQ5NTkgMTYuODc1MSAxMS42MiAxNi45MkMxMS43Mzk3IDE2Ljk3MjkgMTEuODY5MSAxNy4wMDAyIDEyIDE3LjAwMDJDMTIuMTMwOSAxNy4wMDAyIDEyLjI2MDMgMTYuOTcyOSAxMi4zOCAxNi45MkMxMi41MDQxIDE2Ljg3NTEgMTIuNjE2OCAxNi44MDM0IDEyLjcxMDEgMTYuNzEwMUMxMi44MDM0IDE2LjYxNjggMTIuODc1MSAxNi41MDQxIDEyLjkyIDE2LjM4QzEyLjk3MTIgMTYuMjU5OCAxMi45OTg0IDE2LjEzMDcgMTMgMTZDMTMuMDA0OSAxNS45MzM0IDEzLjAwNDkgMTUuODY2NiAxMyAxNS44QzEyLjk4MjggMTUuNzM2MiAxMi45NTU4IDE1LjY3NTUgMTIuOTIgMTUuNjJaTTEyIDJDMTAuMDIyMiAyIDguMDg4NzkgMi41ODY0OSA2LjQ0NDMgMy42ODUzQzQuNzk5ODEgNC43ODQxMiAzLjUxODA5IDYuMzQ1OSAyLjc2MTIxIDguMTczMTdDMi4wMDQzMyAxMC4wMDA0IDEuODA2MyAxMi4wMTExIDIuMTkyMTUgMTMuOTUwOUMyLjU3OCAxNS44OTA3IDMuNTMwNDEgMTcuNjcyNSA0LjkyODk0IDE5LjA3MTFDNi4zMjc0NiAyMC40Njk2IDguMTA5MjkgMjEuNDIyIDEwLjA0OTEgMjEuODA3OUMxMS45ODg5IDIyLjE5MzcgMTMuOTk5NiAyMS45OTU3IDE1LjgyNjggMjEuMjM4OEMxNy42NTQxIDIwLjQ4MTkgMTkuMjE1OSAxOS4yMDAyIDIwLjMxNDcgMTcuNTU1N0MyMS40MTM1IDE1LjkxMTIgMjIgMTMuOTc3OCAyMiAxMkMyMiAxMC42ODY4IDIxLjc0MTMgOS4zODY0MiAyMS4yMzg4IDguMTczMTdDMjAuNzM2MyA2Ljk1OTkxIDE5Ljk5OTcgNS44NTc1MiAxOS4wNzExIDQuOTI4OTNDMTguMTQyNSA0LjAwMDM1IDE3LjA0MDEgMy4yNjM3NSAxNS44MjY4IDIuNzYxMkMxNC42MTM2IDIuMjU4NjYgMTMuMzEzMiAyIDEyIDJaTTEyIDIwQzEwLjQxNzggMjAgOC44NzEwNCAxOS41MzA4IDcuNTU1NDQgMTguNjUxOEM2LjIzOTg1IDE3Ljc3MjcgNS4yMTQ0NyAxNi41MjMzIDQuNjA4OTcgMTUuMDYxNUM0LjAwMzQ3IDEzLjU5OTcgMy44NDUwNCAxMS45OTExIDQuMTUzNzIgMTAuNDM5M0M0LjQ2MjQgOC44ODc0MyA1LjIyNDMzIDcuNDYxOTcgNi4zNDMxNSA2LjM0MzE1QzcuNDYxOTcgNS4yMjQzMyA4Ljg4NzQzIDQuNDYyNCAxMC40MzkzIDQuMTUzNzJDMTEuOTkxMSAzLjg0NTA0IDEzLjU5OTcgNC4wMDM0NiAxNS4wNjE1IDQuNjA4OTZDMTYuNTIzMyA1LjIxNDQ3IDE3Ljc3MjcgNi4yMzk4NCAxOC42NTE4IDcuNTU1NDRDMTkuNTMwOCA4Ljg3MTAzIDIwIDEwLjQxNzcgMjAgMTJDMjAgMTQuMTIxNyAxOS4xNTcyIDE2LjE1NjYgMTcuNjU2OSAxNy42NTY5QzE2LjE1NjYgMTkuMTU3MSAxNC4xMjE3IDIwIDEyIDIwWiIgZmlsbD0iI0VCNTc1NyIvPgo8L3N2Zz4K');
      }
    `,
  },
};
