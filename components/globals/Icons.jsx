import Image from "next/image";
import Grasshopper from '@/assets/Grasshopper.webp'
import rhino from '@/assets/rhino.webp'
import simlab from '@/assets/simlab.webp'

export const HomeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  );
  


export const TwistedArrow = (props) => {
  return (
    <svg {...props} viewBox="0 0 360 342"  xmlns="http://www.w3.org/2000/svg">
    <path
            d="M342.654 174.227C343.704 172.945 345.594 172.756 346.876 173.806C348.158 174.856 348.346 176.746 347.296 178.028L342.654 174.227ZM159.589 141.42L159.868 138.433L159.869 138.434L159.589 141.42ZM184.236 248.724L182.479 246.293L182.479 246.292L184.236 248.724ZM34.9177 108.275C35.017 106.621 36.4382 105.361 38.0921 105.461C39.746 105.56 41.0062 106.981 40.9069 108.635L34.9177 108.275ZM350.512 200.044C350.567 201.7 349.269 203.087 347.613 203.142C345.957 203.197 344.57 201.899 344.515 200.243L350.512 200.044ZM346.66 174.344L346.944 171.357C348.447 171.5 349.609 172.737 349.659 174.245L346.66 174.344ZM320.295 174.307C318.67 173.981 317.619 172.399 317.945 170.775C318.272 169.15 319.854 168.098 321.478 168.425L320.295 174.307ZM344.975 176.127C347.296 178.028 347.295 178.029 347.294 178.03C347.294 178.031 347.292 178.033 347.29 178.035C347.287 178.039 347.283 178.044 347.278 178.051C347.267 178.064 347.251 178.083 347.231 178.107C347.19 178.156 347.131 178.227 347.054 178.32C346.899 178.505 346.672 178.776 346.373 179.125C345.776 179.824 344.897 180.839 343.754 182.117C341.468 184.673 338.125 188.283 333.881 192.526C325.399 201.004 313.281 212.038 298.76 222.223C269.869 242.488 230.675 259.93 191.571 245.779L193.613 240.138C229.851 253.251 266.849 237.278 295.314 217.311C309.471 207.381 321.322 196.595 329.639 188.282C333.795 184.129 337.06 180.601 339.282 178.117C340.392 176.876 341.241 175.896 341.81 175.23C342.094 174.897 342.308 174.642 342.45 174.473C342.52 174.388 342.573 174.325 342.607 174.284C342.624 174.263 342.637 174.248 342.644 174.238C342.648 174.234 342.651 174.23 342.653 174.228C342.653 174.227 342.654 174.227 342.654 174.226C342.654 174.226 342.654 174.227 344.975 176.127ZM191.571 245.779C152.934 231.798 135.393 204.746 132.163 181.185C130.558 169.476 132.484 158.514 137.294 150.563C142.156 142.526 150.052 137.516 159.868 138.433L159.31 144.407C152.19 143.742 146.326 147.224 142.428 153.668C138.478 160.198 136.646 169.707 138.107 180.37C141.011 201.554 156.908 226.855 193.613 240.138L191.571 245.779ZM159.869 138.434C169.254 139.314 178.636 144.72 186.578 152.506C194.556 160.328 201.323 170.778 205.438 182.242C213.68 205.207 211.378 232.813 185.993 251.156L182.479 246.292C205.099 229.948 207.407 205.49 199.79 184.269C195.975 173.64 189.696 163.966 182.377 156.791C175.023 149.58 166.856 145.115 159.309 144.407L159.869 138.434ZM185.993 251.155C173.06 260.503 156.569 261.895 139.593 257.576C122.621 253.258 104.888 243.182 88.9736 229.122C57.1795 201.031 32.0248 156.455 34.9177 108.275L40.9069 108.635C38.1513 154.528 62.1638 197.429 92.9463 224.626C108.321 238.209 125.227 247.73 141.073 251.762C156.915 255.792 171.417 254.288 182.479 246.293L185.993 251.155ZM344.515 200.243L343.662 174.443L349.659 174.245L350.512 200.044L344.515 200.243ZM346.66 174.344C346.377 177.33 346.377 177.33 346.376 177.33C346.376 177.33 346.376 177.33 346.376 177.33C346.375 177.33 346.374 177.33 346.373 177.33C346.37 177.33 346.366 177.329 346.361 177.329C346.351 177.328 346.336 177.327 346.316 177.325C346.276 177.321 346.217 177.315 346.139 177.308C345.985 177.293 345.758 177.271 345.468 177.243C344.888 177.187 344.054 177.106 343.037 177.005C341.005 176.804 338.243 176.524 335.322 176.214C329.566 175.602 322.953 174.842 320.295 174.307L321.478 168.425C323.797 168.892 330.071 169.621 335.957 170.248C338.859 170.556 341.606 170.834 343.629 171.034C344.64 171.134 345.47 171.215 346.046 171.271C346.334 171.299 346.559 171.321 346.712 171.335C346.788 171.343 346.847 171.348 346.886 171.352C346.905 171.354 346.92 171.355 346.93 171.356C346.935 171.356 346.938 171.357 346.941 171.357C346.942 171.357 346.943 171.357 346.943 171.357C346.944 171.357 346.944 171.357 346.944 171.357C346.944 171.357 346.944 171.357 346.66 174.344Z"
            fill="#AE8177"
    />
</svg>
    )
  }
export const Separator = (props) => {
  return (
    < div class="flex flex-row justify-center w-full md:w-3/4 text-center" >
      <div class="bg-gradient-to-r from-transparent via-primary-500 to-transparent w-full  h-[2px] opacity-60"></div>
    </div >
      
    )
}
export const Like = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="0" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      
    )
}
export const Views = (props) => {
  return (
    <svg id="Show"width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
        <g id="Iconly/Bold/Show" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Show" transform="translate(2.000000, 4.000000)" fill="white" fill-rule="nonzero">
                <path d="M10,0 C12.0682927,0 14.0292683,0.717575758 15.7365854,2.04606061 C17.4439024,3.36484848 18.897561,5.29454545 19.9414634,7.70909091 C20.0195122,7.89333333 20.0195122,8.10666667 19.9414634,8.28121212 C17.8536585,13.110303 14.1365854,16 10,16 L10,16 L9.9902439,16 C5.86341463,16 2.14634146,13.110303 0.0585365854,8.28121212 C-0.0195121951,8.10666667 -0.0195121951,7.89333333 0.0585365854,7.70909091 C2.14634146,2.88 5.86341463,0 9.9902439,0 L9.9902439,0 Z M10,4.12121212 C7.84390244,4.12121212 6.09756098,5.8569697 6.09756098,8 C6.09756098,10.1333333 7.84390244,11.8690909 10,11.8690909 C12.1463415,11.8690909 13.8926829,10.1333333 13.8926829,8 C13.8926829,5.8569697 12.1463415,4.12121212 10,4.12121212 Z M10.0011707,5.57362424 C11.3377561,5.57362424 12.430439,6.65968485 12.430439,7.99786667 C12.430439,9.32635152 11.3377561,10.4124121 10.0011707,10.4124121 C8.65482927,10.4124121 7.56214634,9.32635152 7.56214634,7.99786667 C7.56214634,7.83301818 7.58165854,7.67786667 7.61092683,7.52271515 L7.65970732,7.52271515 C8.74263415,7.52271515 9.62068293,6.66938182 9.65970732,5.60271515 C9.76702439,5.58332121 9.88409756,5.57362424 10.0011707,5.57362424 Z"></path>
            </g>
        </g>
    </svg>
      
    )
}

export const Gallery = (props) => {
  return (
<svg width="50" height="50" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <g id="Iconly/Bold/Image" stroke="none" strokeWidth="1.5" fill="white" fillRule="evenodd">
        <g id="Image" transform="translate(2.000000, 2.000000)" fill="white" fillRule="nonzero">
            <path d="M14.3338177,0 C17.7231047,0 20,2.37811294 20,5.91672095 L20,14.083279 C20,17.6218871 17.7231047,20 14.3328156,20 L5.66618229,20 C2.27689532,20 0,17.6218871 0,14.083279 L0,5.91672095 C0,2.37811294 2.27689532,0 5.66618229,0 L14.3338177,0 Z M15.4365921,10.5500516 C14.3646473,9.88132095 13.5370577,10.8204334 13.3138196,11.120743 C13.0986262,11.4107327 12.9136001,11.7306502 12.7185182,12.0505676 C12.2418748,12.8400413 11.6958467,13.750258 10.7506045,14.2796698 C9.37698673,15.0402477 8.33420365,14.3395253 7.58404341,13.8297214 C7.30248193,13.6398349 7.02896505,13.4602683 6.75645376,13.3405573 C6.0847285,13.0505676 5.48037689,13.380805 4.58340244,14.5201238 C4.11279253,15.1155831 3.64620492,15.7058824 3.17358386,16.2941176 C2.8910168,16.6460268 2.95839044,17.1888545 3.33950402,17.4241486 C3.94787794,17.7987616 4.68999357,18 5.52864457,18 L5.52864457,18 L13.9563832,18 C14.432021,18 14.9086643,17.9349845 15.363185,17.7863777 C16.3868621,17.4520124 17.1993681,16.6862745 17.6237215,15.6749226 C17.9817068,14.8245614 18.1556716,13.7925697 17.8208146,12.9339525 C17.7091955,12.6491228 17.5422698,12.3839009 17.3079704,12.1506708 C16.693563,11.5407637 16.1193787,10.9711042 15.4365921,10.5500516 Z M6.49885818,4 C5.12021248,4 4,5.12173038 4,6.5 C4,7.87826962 5.12021248,9 6.49885818,9 C7.87649831,9 8.99771636,7.87826962 8.99771636,6.5 C8.99771636,5.12173038 7.87649831,4 6.49885818,4 Z"></path>
        </g>
    </g>
</svg>
      
    )
}
export const FB = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="transparent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>  
    )
}
export const Gmail = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="25" viewBox="0 0 50 50" fill="white">
    <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
    </svg>

    )
}
export const LinkedIn = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="transparent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    )
}
export const TechStack = (props) => {
  return (
    <div className="flex flex-row items-center">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#004d40" d="M19.532 17.313L41 24 19.532 9.756z"></path><path fill="#26a69a" d="M30.316 4L11.618 4 7 12 21 12z"></path><path fill="#00897b" d="M41 24L30.316 4 21 12z"></path><path fill="#004d40" d="M19.825 38.066L41 24 19.825 29.628z"></path><path fill="#00897b" d="M21 31.097L41 24 20.998 16.924 17.26 24z"></path><path fill="#26a69a" d="M21 16.924L17.094 15.56 8.056 24 17.094 32.461 21 31.096zM21 36.021L7 36.021 11.618 44 30.316 44 21.014 36.012z"></path><path fill="#00796b" d="M7 12L18.184 15.94 21 12z"></path><path fill="#00897b" d="M21.014 36.012L30.316 44 41 24z"></path><path fill="#00796b" d="M21 36L18.269 32.051 7 36.021 21 36.021z"></path><path fill="#00695c" d="M21 31.096L17.094 32.461 21 36zM21 12L17.094 15.56 21 16.924z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#00838f" d="M30,6c0,0.02-0.16,1.15-0.75,3c-0.88,2.79-2.73,7.25-6.44,12.09c-0.19,0.25-0.38,0.51-0.57,0.77	l-1-1.51c0.37-1.25,0.77-4.15-1.99-7.09l-0.03-0.03c-0.1-0.12-0.18-0.19-0.22-0.23c-1.06-1.01-2.08-1.71-4.06-2.6	c-0.29-0.13-0.6-0.26-0.94-0.4c0,1.8,0.19,3.18,0.41,4.15C14.68,15.41,15,16,15,16c1.8,3.6,4.59,4.64,5.61,4.91l1.13,1.7	C18.08,28.23,16.72,35.1,16.25,39c-0.2,1.58-0.25,2.68-0.25,3H9c-1.66,0-3-1.34-3-3V9c0-1.66,1.34-3,3-3H30z"></path><path d="M19.22,13.23C19.15,13.16,19.08,13.08,19,13C19.04,13.04,19.12,13.11,19.22,13.23z"></path><path fill="#00838f" d="M42,9v30c0,1.66-1.34,3-3,3H19c0-0.31,0.05-1.41,0.26-3c0.14-1.13,0.37-2.5,0.71-4H22	c1,2,3.09,2.3,7,1c4.03-1.34,6.97-5.37,8-7c-1,0-6.67-0.33-10,1c-5,2-5,4-5,4h-1.8c0.89-3.58,2.41-7.72,4.99-11.09	c4.26-5.57,5.84-10.78,6.44-13.91c0.34-1.79,0.36-2.9,0.37-3h7C40.66,6,42,7.34,42,9z"></path>
</svg>
      <svg  x="0px" y="0px" width="40" height="40" viewBox="0 0 48 50">
<defs><path id="_tcPC28ZsEauYvlMQO0K_a" d="M-40.802,33.105c0.496-1.331,1.264-2.903,1.318-3.001C-39.514,30.16-40.393,32.012-40.802,33.105 c-0.002,0.004-0.004,0.009-0.005,0.013C-40.806,33.114-40.804,33.109-40.802,33.105 M-27.918,9.194 c0.399,0.668,4.179,8.489,5.401,11.228c-1.203,0.611-14.25,7.538-16.969,9.686c1.304-2.373,9.918-19.954,10.494-21.032h-0.001 C-28.728,8.582-28.371,8.44-27.918,9.194 M-30.805,3c-5.163,9.304-9.634,18.93-13.411,28.878c-0.31,0.815-0.581,1.54-0.814,2.167 c-0.596,1.605-0.938,2.565-1.035,2.727l-0.139,0.511c-0.902,3.33-1.583,6.057-1.795,7.301l2.421,1.062h0.064 c0.532-1.871,2.656-7.268,3.196-8.676l0.046-0.121c0.357-0.945,0.951-2.349,1.46-3.718c6.839-2.743,13.863-4.877,21.07-6.404 c1.21,2.605,2.524,5.253,3.017,6.335c0.072,0.158,0.129,0.281,0.166,0.373c0.538,1.239,3.086,6.431,3.861,8.258 c0.602,1.42,1.133,3.088,1.339,3.763L-9,44.702c0,0-0.594-2.418-0.838-3.066c-0.1-0.266-0.434-1.523-0.932-3.389 c-0.608-1.786-1.261-3.587-1.943-5.383c-0.844-2.221-1.733-4.43-2.636-6.588c-1.007-2.406-2.031-4.749-3.033-6.967 C-21.901,11.518-25.14,5.241-26.315,3L-30.805,3L-30.805,3z"></path></defs><use fill="#d86666" overflow="visible" ></use><clipPath id="_tcPC28ZsEauYvlMQO0K_b"><use overflow="visible" ></use></clipPath><g clip-path="url(#_tcPC28ZsEauYvlMQO0K_b)"><defs><rect id="_tcPC28ZsEauYvlMQO0K_c" width="59.232" height="61.221" x="-58.115" y="-6.288"></rect></defs><use fill="#d86666" overflow="visible"></use><clipPath id="_tcPC28ZsEauYvlMQO0K_d"><use overflow="visible"></use></clipPath></g><path fill="#942d32" d="M22.2,3c-5.17,9.3-9.64,18.93-13.42,28.88c-0.31,0.81-0.58,1.54-0.81,2.17	c-0.6,1.61-0.94,2.56-1.04,2.72c0.23-0.83,0.47-1.71,0.72-2.6c0.18-0.63,0.36-1.27,0.54-1.92c1.4-4.9,3.25-10.13,4.46-13.68	c1.815-4.99,3.951-9.832,6.416-14.527C19.403,3.401,20.075,3,20.801,3H22.2z"></path><linearGradient id="_tcPC28ZsEauYvlMQO0K_e_2JfzmJYy7OGc_gr1" x1="32.405" x2="22.997" y1="2.81" y2="50.864" gradientUnits="userSpaceOnUse"><stop offset=".457" stopColor="#cb2123"></stop><stop offset="1" stopColor="#752425"></stop></linearGradient><path fill="url(#_tcPC28ZsEauYvlMQO0K_e_2JfzmJYy7OGc_gr1)" d="M13.52,30.1c1.32-2.41,9.91-19.95,10.49-21.02	c0.13-0.25,0.29-0.41,0.47-0.41s0.38,0.15,0.6,0.52c0.4,0.67,4.18,8.49,5.4,11.23C29.28,21.03,16.26,27.94,13.52,30.1z M42.84,44.97	c0.01,0,0.01,0,0.02-0.01c0.6-0.44,0.91-1.23,0.7-2c-0.15-0.54-0.3-1.07-0.4-1.32c-0.1-0.27-0.43-1.53-0.93-3.39	c-0.61-1.79-1.26-3.59-1.94-5.39c-0.85-2.22-1.74-4.43-2.64-6.58c-1.01-2.41-2.03-4.75-3.03-6.97C31.1,11.52,27.86,5.24,26.69,3	H22.2c-5.17,9.3-9.64,18.93-13.42,28.88c-0.31,0.81-0.58,1.54-0.81,2.17c-0.6,1.6-0.94,2.56-1.04,2.72L6.8,37.28	c-0.64,2.33-1.16,4.36-1.49,5.8c-0.16,0.7,0.1,1.4,0.62,1.84c0.45,0.2,0.99,0.4,1.61,0.56c0.6-2.02,2.62-7.14,3.14-8.51l0.05-0.11	v-0.01c0.35-0.95,0.95-2.35,1.46-3.72c6.84-2.74,13.86-4.88,21.07-6.4c1.21,2.6,2.52,5.25,3.01,6.33c0.02,0.03,0.03,0.05,0.04,0.08	c0.01,0.02,0.03,0.05,0.03,0.07c0.01,0.02,0.02,0.05,0.03,0.07c0.03,0.06,0.05,0.11,0.07,0.15c0.54,1.24,3.09,6.43,3.86,8.26	c0.34,0.8,0.65,1.68,0.9,2.41c0.03,0.08,0.06,0.16,0.08,0.24c0.13,0.39,0.24,0.74,0.32,0.98c0,0.02,0.01,0.04,0.01,0.05h0.01	L42.84,44.97z"></path><path fill="#e02b2b" d="M42.23,38.25c-0.61-1.79-1.26-3.59-1.94-5.39c-0.85-2.22-1.74-4.43-2.64-6.58	c-1.01-2.41-2.03-4.75-3.03-6.97C31.1,11.52,27.86,5.24,26.68,3h0.938c0.866,0,1.674,0.462,2.097,1.218	c1.768,3.162,3.316,6.428,4.645,9.812c0.53,1.28,1.23,2.84,1.81,4.57c0.78,2.31,1.96,4.92,2.72,7.52c0.67,2.31,1.31,4.61,1.88,6.71	C41.34,34.89,41.84,36.76,42.23,38.25z"></path><linearGradient id="_tcPC28ZsEauYvlMQO0K_f_2JfzmJYy7OGc_gr2" x1="21.953" x2="22.463" y1="26.277" y2="14.022" gradientUnits="userSpaceOnUse"><stop offset=".1" stopColor="#b75e5a"></stop><stop offset=".949" stopColor="#6c272d"></stop></linearGradient><path fill="url(#_tcPC28ZsEauYvlMQO0K_f_2JfzmJYy7OGc_gr2)" d="M30.48,20.42c-1.07,0.6-1.63,0.96-2.85,1.59	c-1.17-3.25-2.21-6.07-2.49-6.74c-0.4-0.95-1.03-0.86-1.37,0.12c-1.87,5.28-3.3,8.73-4.1,10.93c-2.64,1.46-4.24,2.62-6.15,3.79	h-0.01c1.32-2.4,9.92-20,10.5-21.03L24,9.07c0.26-0.44,0.4-0.62,0.52-0.62c0.17,0,0.28,0.33,0.56,0.74	C25.53,9.86,29.27,17.71,30.48,20.42z"></path><linearGradient id="_tcPC28ZsEauYvlMQO0K_g_2JfzmJYy7OGc_gr3" x1="30.743" x2="14.914" y1="30.664" y2="36.409" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#a32424"></stop><stop offset="1" stopColor="#752425"></stop></linearGradient><path fill="url(#_tcPC28ZsEauYvlMQO0K_g_2JfzmJYy7OGc_gr3)" d="M36.28,33.06c-1.49,0.13-2.59,0.3-4.55,0.51l-0.11,0.01	c-4.03,0.45-9.01,1.1-14.72,2.06l-0.58,0.09c-1.97,0.34-3.46,0.71-5.59,1.12c0.36-0.96,0.95-2.37,1.46-3.71v-0.01	c6.8-2.85,13.83-4.99,21.07-6.4C34.47,29.33,35.78,31.98,36.28,33.06z"></path><linearGradient id="_tcPC28ZsEauYvlMQO0K_h_2JfzmJYy7OGc_gr4" x1="10.056" x2="14.081" y1="46.027" y2="34.329" gradientUnits="userSpaceOnUse"><stop offset=".343" stopColor="#d77670"></stop><stop offset=".949" stopColor="#a62224"></stop></linearGradient><path fill="url(#_tcPC28ZsEauYvlMQO0K_h_2JfzmJYy7OGc_gr4)" d="M16.32,35.74c-0.22,0.56-0.43,1.12-0.65,1.67	c-0.17,0.44-0.34,0.88-0.51,1.31c-0.67,1.78-1.28,3.42-1.78,4.73c-0.1,0.3-0.21,0.58-0.3,0.84c-0.18,0.47-0.33,0.88-0.46,1.22	c-1.1,0.28-2.07,0.32-2.79,0.3c-0.01,0.01-0.02,0.01-0.02,0c-0.07,0-0.15-0.01-0.22-0.01l-0.34-0.03H9.22c-0.06,0-0.12,0-0.17-0.01	c-0.01,0-0.03,0-0.04-0.01c-0.53-0.05-1.02-0.15-1.47-0.27c0.6-2.02,2.62-7.14,3.14-8.51l0.05-0.11	C12.86,36.44,14.35,36.07,16.32,35.74z"></path><linearGradient id="_tcPC28ZsEauYvlMQO0K_i_2JfzmJYy7OGc_gr5" x1="40.506" x2="32.254" y1="46.935" y2="31.827" gradientUnits="userSpaceOnUse"><stop offset=".343" stopColor="#d77670"></stop><stop offset=".949" stopColor="#a62224"></stop></linearGradient><path fill="url(#_tcPC28ZsEauYvlMQO0K_i_2JfzmJYy7OGc_gr5)" d="M41.62,45.37h-0.01c-0.75,0.18-1.3,0.2-2.38,0.22	c-1.31,0.04-2.08,0.05-2.91-0.18c-0.2-0.55-0.43-1.19-0.7-1.88c-0.01-0.01-0.01-0.03-0.01-0.04c-0.25-0.68-0.54-1.43-0.84-2.21	c-0.2-0.51-0.41-1.05-0.63-1.61c-0.43-1.1-0.89-2.26-1.35-3.44c-0.35-0.88-0.7-1.77-1.06-2.66c1.96-0.22,3.05-0.39,4.54-0.51h0.01	c0.02,0.05,0.05,0.11,0.06,0.15c0.01,0.02,0.02,0.05,0.03,0.07c0.03,0.06,0.05,0.11,0.07,0.15c0.54,1.24,3.09,6.43,3.86,8.26	c0.34,0.8,0.65,1.68,0.9,2.41c0.03,0.08,0.06,0.16,0.08,0.24c0.13,0.39,0.24,0.74,0.32,0.98C41.61,45.34,41.61,45.36,41.62,45.37z"></path><path fill="#a12930" d="M36.3,45.41c-0.11-0.03-0.22-0.07-0.34-0.11	c-0.43-0.15-0.77-0.33-0.99-0.44l-0.01-0.01l-0.1-0.07c-0.65-0.44-1.07-1.15-1.13-1.94c-0.06-0.82-0.18-1.64-0.35-2.45	c-0.47-2.3-1.06-4.57-1.76-6.81l0.1-0.01c0.83,2.07,1.66,4.17,2.42,6.1c0.22,0.56,0.43,1.1,0.63,1.61	C35.38,42.88,35.91,44.3,36.3,45.41z"></path><path fill="#a12930" d="M16.9,35.64c-0.26,1.34-0.46,2.46-0.53,2.75c-0.11,0.44-0.2,2.45-0.25,3.9	c-0.04,0.96-0.55,1.84-1.36,2.34l-0.63,0.39c-0.29,0.12-0.61,0.24-0.94,0.34c-0.19,0.06-0.38,0.11-0.57,0.15	c0.13-0.34,0.28-0.75,0.46-1.22c0.09-0.26,0.2-0.54,0.3-0.84c0.5-1.31,1.11-2.95,1.78-4.73c0.17-0.43,0.34-0.87,0.51-1.31	c0.22-0.55,0.43-1.11,0.65-1.67L16.9,35.64z"></path>
      </svg>
      <Image
        src={Grasshopper}
        width={45}
        height={45}
      />
      <Image
        src={rhino}
        width={45}
        height={45}
      />
      <Image
        src={simlab}
        width={45}
        height={45}
      />
  
  </div>
    )
}
export const Telegram = (props) => {
  return (
<svg {...props} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="25" viewBox="0,0,256,256">
      <g fill="#ffffff" fillRule="nonzero" stroke="none"  fontFamily="none"  fontSize="none"
        style={{
        mixBlendMode:'normal'
      }}
      ><g transform="scale(5.12,5.12)"><path d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z"></path></g></g>
</svg>
      
    )
}

export const Loader = (props) => {
  return (
    <span class="loader"></span>
  )
}
export function AwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


export function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

export const RightArrow = (props) => {
  return (
    <svg {...props} id="Arrow - Right 2"  width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
    <path  d="M8.5 5L12 8.5L12.875 9.375M15.5 12L8.5 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
      
    )
}
  
export const Behance = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
    
      
    )
  }
  export const ProjectsIcon = (props) => (
    <svg {...props}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-blocks"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>
  );
  
  export const ExperienceIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
  );
  
  export const BehanceIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer-click">
    <path d="m9 9 5 12 1.8-5.2L21 14Z" />
    <path d="M7.2 2.2 8 5.1" />
    <path d="m5.1 8-2.9-.8" />
    <path d="M14 4.1 12 6" />
    <path d="m6 12-1.9 2" />
</svg>
  );