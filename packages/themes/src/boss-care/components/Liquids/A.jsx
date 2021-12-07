import React from 'react';
import styled, { keyframes } from 'styled-components';
import { base } from '@quocs/common/src/utils';

const scaleRotate = (scale = 0.8, rotate = `10deg`) => keyframes`
  from {
    transform: scale(${scale}) rotate(${rotate});
  }

  to {
    transform: scale(1) rotate(0);
  }
`;

const opacity = (from = 0, to = 1) => keyframes`
  from {
    opacity: ${from};
  }

  to {
    opacity: ${to};
  }
`;

const AnimatedSvg = styled.svg`
  ${base};

  transform: translate3d(0, 0, 0);
  animation: none !important;

  .liquid & {
    .layer-1 {
      opacity: 0;
      transform-origin: 400px 450px;
      animation: 600ms ${scaleRotate()} forwards, 600ms ${opacity(0, 0.5)} forwards;
    }

    .layer-2 {
      opacity: 0;
      transform-origin: 360px 400px;
      animation: 600ms ${scaleRotate(0.9, `-15deg`)} forwards 50ms, 600ms ${opacity()} forwards 50ms;
    }

    .layer-3 {
      opacity: 0;
      transform-origin: 510px 120px;
      animation: 600ms ${scaleRotate(0.9, 0)} forwards 70ms, 600ms ${opacity()} forwards 70ms;
    }

    .layer-4 {
      opacity: 0;
      transform-origin: 160px 680px;
      animation: 600ms ${scaleRotate(0.9, 0)} forwards 70ms, 600ms ${opacity()} forwards 70ms;
    }

    .layer-5 {
      opacity: 0;
      transform-origin: 740px 580px;
      animation: 600ms ${scaleRotate(0.9, 0)} forwards 70ms, 600ms ${opacity()} forwards 70ms;
    }

    .layer-6 {
      opacity: 0;
      transform-origin: 410px 660px;
      animation: 600ms ${scaleRotate(0.9, `-15deg`)} forwards 70ms, 600ms ${opacity()} forwards 70ms;
    }

    .layer-7 {
      opacity: 0;
      transform-origin: 540px 205px;
      animation: 600ms ${scaleRotate(0.9, `-15deg`)} forwards 70ms, 600ms ${opacity()} forwards 70ms;
    }

    .layer-8 {
      opacity: 0;
      transform-origin: 185px 565px;
      animation: 600ms ${scaleRotate(0.9, `-15deg`)} forwards 70ms, 600ms ${opacity()} forwards 70ms;
    }

    .layer-9 {
      opacity: 0;
      transform-origin: 680px 200px;
      animation: 600ms ${scaleRotate(0.9, 0)} forwards 85ms, 600ms ${opacity()} forwards 85ms;
    }

    .layer-10 {
      opacity: 0;
      transform-origin: 270px 720px;
      animation: 600ms ${scaleRotate()} forwards 90ms, 600ms ${opacity()} forwards 90ms;
    }

    .layer-11 {
      opacity: 0;
      transform-origin: 720px 455px;
      animation: 600ms ${scaleRotate()} forwards 90ms, 600ms ${opacity()} forwards 90ms;
    }

    .layer-12 {
      opacity: 0;
      transform-origin: 130px 170px;
      animation: 600ms ${scaleRotate(0.9, `-15deg`)} forwards 90ms, 600ms ${opacity()} forwards 90ms;
    }
  }
`;

export default function A(props) {
  return (
    <AnimatedSvg
      viewBox="0 0 800 804"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="layer-1"
        d="M579.427 645.172C608.673 653.417 665.248 615.846 664.132 570.2C662.975 523.053 621.357 487.666 616.145 440.787C610.37 388.799 666.293 350.509 678.116 299.561C690.555 245.951 664.864 182.033 624.636 144.476C590.396 112.506 533.718 94.4615 487.594 102.635C431.541 112.568 397.78 175.119 342.706 189.541C298.158 201.207 252.306 188.407 208.898 173.025C175.856 161.314 147.584 161.269 116.958 159.563C83.2101 157.678 -20.4586 208.648 3.57937 310.307C11.2928 342.916 42.3965 364.314 72.0397 379.938C101.687 395.561 144.06 432.681 165.967 458.037C201.421 499.078 189.487 535.224 188.304 589.446C187.12 643.667 162.957 700.287 204.574 749.435C221.524 769.458 266.228 791.517 294.313 793.809C313.96 795.412 342.871 788.538 355.792 778.913C433.815 720.752 416.593 599.263 579.427 645.172Z"
        fill="url(#paint0_linear)"
      />
      <path
        className="layer-1"
        d="M181.946 699.87C179.083 698.025 176.31 696.095 173.639 694.081C128.81 660.302 95.8973 598.22 102.767 542.511C107.354 505.31 134.688 472.121 146.582 437.592C153.991 444.787 160.646 451.768 166.059 458.03C201.513 499.071 189.579 535.217 188.396 589.439C187.592 626.17 176.247 664.009 181.946 699.87ZM642.933 626.17C640.458 626.17 637.975 626.139 635.474 626.072C652.062 612.061 664.76 592.052 664.224 570.193C663.067 523.046 621.449 487.659 616.237 440.781C612.941 411.093 629.761 385.871 647.001 360.207C668.007 375.045 690.915 388.814 708.927 396.001C740.67 408.672 774.516 427.042 785.838 459.294C821.118 559.831 721.424 622.646 686.989 624.357C672.031 625.098 657.667 626.17 642.933 626.17ZM306.321 194.063C284.463 194.063 262.546 189.691 240.987 183.451C328.193 167.783 318.787 76.7276 378.332 21.7154C390.405 10.5674 418.994 0.495766 439.097 0.0178654C439.642 0.00446636 440.196 0 440.758 0C469.633 0 515.909 17.2669 534.882 35.4048C558.277 57.7724 565.669 83.6906 567.697 110.824C549.224 104.289 529.626 100.667 510.8 100.667C502.912 100.667 495.163 101.301 487.686 102.628C431.634 112.561 397.872 175.113 342.798 189.534C330.712 192.697 318.523 194.063 306.321 194.063Z"
        fill="url(#paint1_linear)"
      />
      <path
        className="layer-1"
        d="M277.306 727.171C243.996 727.171 208.944 717.224 182.025 699.877C176.326 664.016 187.671 626.177 188.475 589.446C189.658 535.225 201.592 499.078 166.138 458.037C160.725 451.775 154.07 444.794 146.661 437.599C151.699 422.98 153.968 408.116 150.564 392.614C140.256 345.623 94.2435 314.193 88.0174 266.484C82.3183 222.812 129.733 180.935 160.734 180.935C162.512 180.935 164.24 181.073 165.897 181.359C183.611 184.387 199.132 185.79 212.834 185.79C223.254 185.79 232.611 184.977 241.066 183.458C262.625 189.698 284.542 194.071 306.4 194.071C318.602 194.071 330.791 192.704 342.877 189.542C397.952 175.12 431.713 112.568 487.766 102.635C495.242 101.309 502.991 100.674 510.879 100.674C529.705 100.674 549.303 104.297 567.776 110.831C569.866 138.764 566.275 167.991 568.616 195.955C573.225 251.084 564.998 289.021 605.36 326.855C616.151 336.967 631.064 348.901 647.081 360.215C629.841 385.878 613.02 411.1 616.316 440.788C621.529 487.667 663.146 523.054 664.303 570.201C664.839 592.059 652.141 612.068 635.553 626.079C621.846 625.713 607.696 624.235 592.368 620.563C565.471 614.114 537.816 608.669 510.647 608.669C491.674 608.669 472.933 611.327 454.866 618.156C400.551 638.692 373.011 705.755 317.213 721.838C304.681 725.456 291.143 727.171 277.306 727.171Z"
        fill="url(#paint2_linear)"
      />
      <path
        className="layer-2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M78.8342 373.295C50.9284 386.775 33.1389 453.726 64.8589 487.822C97.6331 523.043 153.342 521.918 189.024 554.187C228.591 589.976 211.789 657.034 237.22 703.935C263.974 753.28 326.824 784.71 382.94 786.183C430.703 787.438 486.184 762.887 515.876 725.45C551.956 679.951 535.435 609.365 567.731 561.106C593.859 522.07 637.522 500.832 681.069 483.217C714.219 469.813 735.84 450.729 760.378 431.322C787.422 409.933 832.108 300.905 745.001 239.541C717.064 219.858 678.836 224.552 645.638 232.676C612.435 240.792 554.975 241.105 521.102 236.558C466.269 229.193 450.94 193.529 415.169 151.326C379.402 109.124 359.563 49.5513 294.546 40.1675C268.065 36.3487 219.006 49.7344 196.014 66.979C179.926 79.0426 162.502 103.844 159.148 119.932C138.902 217.102 234.219 298.225 78.8342 373.295Z"
        fill="url(#paint3_linear)"
      />
      <path
        className="layer-3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M489.723 69.7059C480.415 65.9452 469.785 62.9751 459.897 67.2047C451.29 70.885 444.863 79.6838 442.424 88.9604C439.986 98.2415 441.142 107.884 444.144 116.415C452.92 141.364 489.321 169.873 516.168 146.76C550.483 117.219 515.159 79.9964 489.723 69.7059Z"
        fill="url(#paint4_linear)"
      />
      <path
        className="layer-4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M141.81 652.4C137.143 650.516 131.814 649.028 126.852 651.145C122.538 652.994 119.317 657.407 118.094 662.057C116.87 666.711 117.45 671.548 118.956 675.826C123.355 688.332 141.609 702.629 155.071 691.039C172.275 676.224 154.561 657.564 141.81 652.4Z"
        fill="url(#paint5_linear)"
      />
      <path
        className="layer-5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M686.327 576.379C679.297 581.801 672.28 588.581 671.087 598.023C670.047 606.232 673.888 615.067 679.877 621.078C685.867 627.086 693.741 630.511 701.593 632.034C724.55 636.492 762.576 621.467 756.94 590.649C749.74 551.265 705.55 561.577 686.327 576.379Z"
        fill="url(#paint6_linear)"
      />
      <path
        className="layer-6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M420.015 667.361C422.404 666.209 424.62 664.61 426.223 662.493C427.858 660.335 428.805 657.714 429.238 655.043C432.4 635.583 405.95 620.103 392.886 637.021C379.737 654.047 401.935 676.07 420.015 667.361Z"
        fill="url(#paint7_linear)"
      />
      <path
        className="layer-7"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M536.184 214.76C538.573 213.603 540.789 212.009 542.392 209.892C544.027 207.734 544.974 205.113 545.407 202.437C548.569 182.982 522.119 167.501 509.055 184.42C495.906 201.446 518.104 223.469 536.184 214.76Z"
        fill="url(#paint8_linear)"
      />
      <path
        className="layer-8"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M129.558 583.889C136.422 596.145 151.327 603.349 165.195 601.111C173.931 599.704 181.961 594.979 190.782 594.327C201.341 593.541 212.65 598.565 222.141 593.876C225.147 592.388 227.657 590.021 229.711 587.364C238.438 576.091 238.805 559.529 231.98 547.015C205.745 498.934 97.7348 527.068 129.558 583.889Z"
        fill="url(#paint9_linear)"
      />
      <path
        className="layer-9"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M781.082 178.906C781.082 239.894 731.639 289.333 670.651 289.333C609.663 289.333 560.221 239.894 560.221 178.906C560.221 117.914 609.663 68.4755 670.651 68.4755C731.639 68.4755 781.082 117.914 781.082 178.906Z"
        fill="url(#paint10_linear)"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={179}
        y={625}
        width={179}
        height={179}
      >
        <circle cx="268.249" cy="714.765" r="88.8945" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)" className="layer-10">
        <path
          d="M143.877 739.608L133.426 729.617L283.268 572.848L293.719 582.835L143.877 739.608Z"
          fill="url(#paint11_linear)"
        />
        <path
          d="M167.031 761.578L156.575 751.587L306.417 594.814L316.868 604.805L167.031 761.578Z"
          fill="url(#paint12_linear)"
        />
        <path
          d="M189.76 783.571L179.304 773.575L329.146 616.806L339.597 626.792L189.76 783.571Z"
          fill="url(#paint13_linear)"
        />
        <path
          d="M212.9 805.536L202.454 795.545L352.291 638.771L362.747 648.763L212.9 805.536Z"
          fill="url(#paint14_linear)"
        />
        <path
          d="M236.054 827.524L225.603 817.533L375.445 660.764L385.896 670.75L236.054 827.524Z"
          fill="url(#paint15_linear)"
        />
        <path
          d="M258.783 849.49L248.332 839.503L398.174 682.729L408.625 692.721L258.783 849.49Z"
          fill="url(#paint16_linear)"
        />
      </g>
      <mask
        id="mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={622}
        y={364}
        width={178}
        height={178}
      >
        <circle cx="711.106" cy="452.931" r="88.8945" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask1)" className="layer-11">
        <path
          d="M585.824 477.996L575.373 468L725.215 311.231L735.666 321.218L585.824 477.996Z"
          fill="url(#paint17_linear)"
        />
        <path
          d="M608.974 499.962L598.522 489.97L748.364 333.197L758.816 343.188L608.974 499.962Z"
          fill="url(#paint18_linear)"
        />
        <path
          d="M631.698 521.949L621.251 511.962L771.089 355.189L781.54 365.175L631.698 521.949Z"
          fill="url(#paint19_linear)"
        />
        <path
          d="M654.857 543.915L644.401 533.928L794.243 377.155L804.698 387.146L654.857 543.915Z"
          fill="url(#paint20_linear)"
        />
        <path
          d="M678.002 565.885L667.55 555.899L817.392 399.12L827.843 409.112L678.002 565.885Z"
          fill="url(#paint21_linear)"
        />
        <path
          d="M700.731 587.877L690.279 577.886L840.121 421.112L850.572 431.104L700.731 587.877Z"
          fill="url(#paint22_linear)"
        />
      </g>
      <mask
        id="mask2"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={36}
        y={76}
        width={178}
        height={179}
      >
        <circle cx="124.94" cy="165.236" r="88.8945" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask2)" className="layer-12">
        <path
          d="M-0.91322 193.488L-11.3645 183.501L138.477 26.7273L148.929 36.7185L-0.91322 193.488Z"
          fill="url(#paint23_linear)"
        />
        <path
          d="M22.2363 215.458L11.785 205.471L161.627 48.6931L172.078 58.6888L22.2363 215.458Z"
          fill="url(#paint24_linear)"
        />
        <path
          d="M44.9653 237.45L34.514 227.459L184.356 70.6852L194.807 80.6765L44.9653 237.45Z"
          fill="url(#paint25_linear)"
        />
        <path
          d="M68.1191 259.416L57.6634 249.429L207.505 92.6511L217.957 102.642L68.1191 259.416Z"
          fill="url(#paint26_linear)"
        />
        <path
          d="M91.2641 281.408L80.8128 271.421L230.655 114.643L241.102 124.63L91.2641 281.408Z"
          fill="url(#paint27_linear)"
        />
        <path
          d="M113.993 303.369L103.542 293.383L253.384 136.609L263.831 146.596L113.993 303.369Z"
          fill="url(#paint28_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1={0}
          y1="447.358"
          x2="423.856"
          y2="777.671"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0035809" stopColor="#4552CB" />
          <stop offset={1} stopColor="#7145CB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="101.858"
          y1="349.935"
          x2="530.255"
          y2="685.614"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0035809" stopColor="#4552CB" />
          <stop offset={1} stopColor="#7145CB" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="87.5474"
          y1="413.923"
          x2="463.741"
          y2="688.616"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0035809" stopColor="#4552CB" />
          <stop offset={1} stopColor="#7145CB" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="47.983"
          y1="412.871"
          x2="506.556"
          y2="777.298"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4695EA" />
          <stop offset={1} stopColor="#7145CB" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="441.105"
          y1="110.212"
          x2="496.323"
          y2="153.589"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEBB75" />
          <stop offset={1} stopColor="#FE8E75" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="117.432"
          y1="672.713"
          x2="145.119"
          y2="694.462"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEBB75" />
          <stop offset={1} stopColor="#FE8E75" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="670.918"
          y1="597.986"
          x2="714.813"
          y2="641.274"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEBB75" />
          <stop offset={1} stopColor="#FE8E75" />
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="388.913"
          y1="649.552"
          x2="413.328"
          y2="669.421"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="505.082"
          y1="196.951"
          x2="529.497"
          y2="216.82"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint9_linear"
          x1="123.745"
          y1="562.007"
          x2="173.168"
          y2="618.051"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint10_linear"
          x1="560.221"
          y1="178.904"
          x2="695.793"
          y2="286.435"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint11_linear"
          x1="133.426"
          y1="656.228"
          x2="234.798"
          y2="733.513"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint12_linear"
          x1="156.575"
          y1="678.196"
          x2="257.95"
          y2="755.48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint13_linear"
          x1="179.304"
          y1="700.188"
          x2="280.679"
          y2="777.472"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint14_linear"
          x1="202.454"
          y1="722.154"
          x2="303.828"
          y2="799.438"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint15_linear"
          x1="225.603"
          y1="744.144"
          x2="326.976"
          y2="821.429"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint16_linear"
          x1="248.332"
          y1="766.11"
          x2="349.705"
          y2="843.394"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint17_linear"
          x1="575.373"
          y1="394.613"
          x2="676.748"
          y2="471.897"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint18_linear"
          x1="598.522"
          y1="416.579"
          x2="699.897"
          y2="493.863"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint19_linear"
          x1="621.251"
          y1="438.569"
          x2="722.623"
          y2="515.851"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint20_linear"
          x1="644.401"
          y1="460.535"
          x2="745.774"
          y2="537.822"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint21_linear"
          x1="667.55"
          y1="482.503"
          x2="768.925"
          y2="559.787"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint22_linear"
          x1="690.279"
          y1="504.495"
          x2="791.654"
          y2="581.779"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint23_linear"
          x1="-11.3645"
          y1="110.108"
          x2="90.0082"
          y2="187.392"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint24_linear"
          x1="11.785"
          y1="132.076"
          x2="113.16"
          y2="209.36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint25_linear"
          x1="34.514"
          y1="154.068"
          x2="135.889"
          y2="231.352"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint26_linear"
          x1="57.6634"
          y1="176.034"
          x2="159.038"
          y2="253.318"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint27_linear"
          x1="80.8128"
          y1="198.026"
          x2="182.187"
          y2="275.307"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
        <linearGradient
          id="paint28_linear"
          x1="103.542"
          y1="219.989"
          x2="204.914"
          y2="297.271"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4552CB" />
          <stop offset={1} stopColor="#2C1D74" />
        </linearGradient>
      </defs>
    </AnimatedSvg>
  );
}
