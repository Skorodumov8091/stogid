// Для неактивных иконок добавить класс svg "opacity-10"
export default function StoIcons() {
    return (      
        <div className="flex flex-row flex-wrap gap-2">
            <div title='Парковка'>
                <svg className="w-5 h-5 opacity-10" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeWidth="2" d="m109.9 11.58h-91.8a7.06 7.06 0 0 0 -7.052 7.052v91.8a7.061 7.061 0 0 0 7.052 7.048h91.8a7.061 7.061 0 0 0 7.053-7.052v-91.8a7.06 7.06 0 0 0 -7.053-7.048zm3.553 98.848a3.557 3.557 0 0 1 -3.553 3.552h-91.8a3.556 3.556 0 0 1 -3.552-3.552v-91.8a3.555 3.555 0 0 1 3.552-3.548h91.8a3.556 3.556 0 0 1 3.553 3.552z"></path>
                    <path stroke="currentColor" strokeWidth="2" d="m72.57 25.61h-26.048a5.711 5.711 0 0 0 -5.706 5.705v66.43a5.706 5.706 0 0 0 11.411 0v-26.676h20.343a22.73 22.73 0 1 0 0-45.459zm0 41.959h-22.093a1.749 1.749 0 0 0 -1.75 1.75v28.426a2.206 2.206 0 0 1 -4.411 0v-66.43a2.208 2.208 0 0 1 2.206-2.205h26.048a19.23 19.23 0 1 1 0 38.459z"></path>
                    <path stroke="currentColor" strokeWidth="2" d="m72.57 33.52h-22.093a1.75 1.75 0 0 0 -1.75 1.75v26.139a1.75 1.75 0 0 0 1.75 1.75h22.093a14.82 14.82 0 1 0 0-29.639zm0 26.139h-20.343v-22.639h20.343a11.32 11.32 0 1 1 0 22.639z"></path>
                </svg>
            </div>
            <div title='WiFi'>
                <svg className="w-5 h-5" viewBox="0 0 473.867 473.867" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(.429 0 0 .429 13.714 20.783)">
                        <circle clipRule="evenodd" cx="520.845" cy="840.262" fillRule="evenodd" r="99.552"></circle>
                    </g>
                    <g transform="matrix(1.212 1.212 -1.212 1.212 42.183 -38.871)">
                        <path clipRule="evenodd" d="m185.027 92.813c0-37.771 30.677-68.448 68.448-68.448 3.435 0 6.219-2.784 6.219-6.219s-2.784-6.219-6.219-6.219c-44.64 0-80.885 36.245-80.885 80.885 0 3.435 2.784 6.219 6.219 6.219s6.218-2.783 6.218-6.218z" fillRule="evenodd"></path>
                    </g>
                    <g transform="matrix(2.121 2.121 -2.121 2.121 55.82 -96.146)">
                        <path clipRule="evenodd" d="m84.014 69.751c0-39.243 31.872-71.115 71.115-71.115 1.963 0 3.552-1.589 3.552-3.552s-1.589-3.552-3.552-3.552c-43.168 0-78.219 35.051-78.219 78.219 0 1.963 1.589 3.552 3.552 3.552s3.552-1.59 3.552-3.552z" fillRule="evenodd"></path>
                    </g>
                    <g transform="matrix(3.03 3.03 -3.03 3.03 69.457 -153.422)">
                        <path clipRule="evenodd" d="m43.608 60.525c0-39.84 32.341-72.181 72.181-72.181 1.376 0 2.485-1.109 2.485-2.485s-1.109-2.485-2.485-2.485c-42.581 0-77.152 34.571-77.152 77.152 0 1.376 1.109 2.485 2.485 2.485 1.377 0 2.486-1.11 2.486-2.486z" fillRule="evenodd"></path>
                    </g>   
                </svg>
            </div>
            <div title="Кофе">
                <svg className="w-5 h-5" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 496 496">
                    <path d="M375.504,352h30.56c24.024,0,46.608-9.352,63.592-26.344S496,286.08,496,262.056V224c0-30.88-25.128-56-56-56h-32 c0-8.824-7.176-16-16-16H104c-8.824,0-16,7.176-16,16v32v8v56c0,51.912,29.264,97.088,72.136,120H32c-17.648,0-32,14.352-32,32 s14.352,32,32,32h53.04l55.992,48h213.92l55.992-48H464c17.648,0,32-14.352,32-32s-14.352-32-32-32H335.864 C351.024,375.896,364.44,364.992,375.504,352z M408,264v-32h24v30.064c0,6.824-2.768,13.512-7.592,18.336 c-4.824,4.824-11.52,7.6-18.344,7.6h-0.312C407.144,280.192,408,272.2,408,264z M401.976,304h4.088 c11.032,0,21.84-4.48,29.664-12.288C443.52,283.904,448,273.096,448,262.064V232c0-8.824-7.176-16-16-16h-24v-8v-8v-16h32 c22.056,0,40,17.944,40,40v38.056c0,19.752-7.688,38.32-21.656,52.288C444.376,328.312,425.816,336,406.064,336h-18.896 C393.384,326.088,398.464,315.4,401.976,304z M464,400c8.824,0,16,7.176,16,16c0,8.824-7.176,16-16,16h-96v16h18.376l-37.336,32 H146.96l-37.336-32H352v-16H32c-8.824,0-16-7.176-16-16c0-8.824,7.176-16,16-16h192h48H464z M272,384h-48 c-66.168,0-120-53.832-120-120v-48h256v-16H104v-32h288v32h-16v16h16v48C392,330.168,338.168,384,272,384z"></path>
                    <rect x="192" width="16" height="16"></rect>
                    <path d="M160,83.528c0-3.448,2.192-6.496,5.472-7.592l26.128-8.704c9.808-3.272,16.4-12.416,16.4-22.76V32h-16v12.472 c0,3.448-2.192,6.496-5.472,7.592L160.4,60.768c-9.808,3.272-16.4,12.416-16.4,22.76V128h16V83.528z"></path>
                    <path d="M240,83.528c0-3.448,2.192-6.496,5.472-7.592l26.128-8.704c9.808-3.272,16.4-12.416,16.4-22.76V0h-16v44.472 c0,3.448-2.192,6.496-5.472,7.592L240.4,60.768c-9.808,3.272-16.4,12.416-16.4,22.76V128h16V83.528z"></path>
                    <path d="M320,83.528c0-3.448,2.192-6.496,5.472-7.592l26.128-8.704c9.808-3.272,16.4-12.416,16.4-22.76V0h-16v44.472 c0,3.448-2.192,6.496-5.472,7.592L320.4,60.768c-9.808,3.272-16.4,12.416-16.4,22.76V96h16V83.528z"></path>
                    <rect x="304" y="112" width="16" height="16"></rect>
                </svg>
            </div>
            <div title="Оплата наличными">
                <svg className="w-5 h-5" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                    <path d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,494.933 C124.25,494.933,17.067,387.75,17.067,256S124.25,17.067,256,17.067S494.933,124.25,494.933,256S387.75,494.933,256,494.933z"></path>
                    <path d="M285.987,256.142c39.988,0,72.517-32.538,72.517-72.533c0-39.996-32.529-72.533-72.517-72.533h-97.594 c-0.243-0.021-0.453-0.142-0.702-0.142c-0.249,0-0.458,0.121-0.702,0.142h-16.219c-4.713,0-8.533,3.821-8.533,8.533 s3.821,8.533,8.533,8.533h8.388v110.933h-8.388c-4.713,0-8.533,3.821-8.533,8.533s3.821,8.533,8.533,8.533h8.388v17.013h-8.388 c-4.713,0-8.533,3.821-8.533,8.533s3.821,8.533,8.533,8.533h8.388v102.313c0,4.713,3.821,8.533,8.533,8.533 s8.533-3.821,8.533-8.533V290.221h136.679c4.713,0,8.533-3.821,8.533-8.533s-3.821-8.533-8.533-8.533H196.225v-17.013H285.987z M196.225,128.142h89.762c30.575,0,55.45,24.883,55.45,55.467s-24.875,55.467-55.45,55.467h-89.762V128.142z"></path>
                </svg>
            </div>
            <div title="Оплата картой">
                <svg className="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m444.3281 264.2539a5.9989 5.9989 0 0 1 -4.8213-2.4277 36.8485 36.8485 0 0 0 -29.48-14.85h-308.0532a36.3118 36.3118 0 0 0 -26.8506 11.69 6 6 0 0 1 -10.03-2.0361l-29.4494-80.9177a48.7457 48.7457 0 0 1 29.0947-62.4033l289.4834-105.3604a48.7473 48.7473 0 0 1 62.4033 29.0943l59.7314 164.122a48.7407 48.7407 0 0 1 -29.0947 62.4034l-.8691.3193a6.0056 6.0056 0 0 1 -2.0645.3662zm-342.3545-29.2773h308.0528a48.9188 48.9188 0 0 1 36.14 16.0673 36.7342 36.7342 0 0 0 18.9151-45.7734l-59.7315-164.1221a36.734 36.734 0 0 0 -47.0244-21.9233l-289.4828 105.3599a36.7327 36.7327 0 0 0 -21.9239 47.0229l26.4483 72.6694a48.8538 48.8538 0 0 1 28.6064-9.3007z"></path>
                    <path d="m68.4561 254.3252a6.0024 6.0024 0 0 1 -5.6377-3.95l-18.0313-49.54a6 6 0 0 1 3.5859-7.69l369.7051-134.5622a5.9985 5.9985 0 0 1 7.69 3.5859l18.0307 49.5411a6 6 0 0 1 -3.5859 7.69l-369.7051 134.5609a5.9729 5.9729 0 0 1 -2.0517.3643zm-10.3409-51.9561 13.9268 38.2637 358.4287-130.457-13.9268-38.2642z"></path>
                    <path d="m410.0264 507h-308.0528a48.7441 48.7441 0 0 1 -48.6894-48.6885v-73.9315a6 6 0 0 1 12 0v73.9316a36.73 36.73 0 0 0 36.6894 36.6884h308.0528a36.73 36.73 0 0 0 36.6894-36.6885v-174.6465a36.73 36.73 0 0 0 -36.6894-36.6884h-308.0528a36.73 36.73 0 0 0 -36.6894 36.6884v49.755a6 6 0 0 1 -12 0v-49.755a48.7441 48.7441 0 0 1 48.6894-48.6884h308.0528a48.7441 48.7441 0 0 1 48.6894 48.6884v174.6465a48.7441 48.7441 0 0 1 -48.6894 48.6885z"></path>
                    <path d="m59.2842 369.8a6 6 0 0 1 -6-6v-9.8a6 6 0 0 1 12 0v9.8a6 6 0 0 1 -6 6z"></path>
                    <path d="m413.3877 389.5791h-35.4385a24.0388 24.0388 0 0 1 -24.0117-24.0117v-13.5488a24.0388 24.0388 0 0 1 24.0117-24.0118h35.4385a24.0388 24.0388 0 0 1 24.0117 24.0118v13.5488a24.0388 24.0388 0 0 1 -24.0117 24.0117zm-35.4385-49.5723a12.0257 12.0257 0 0 0 -12.0117 12.0118v13.5488a12.0257 12.0257 0 0 0 12.0117 12.0117h35.4385a12.0257 12.0257 0 0 0 12.0117-12.0117v-13.5488a12.0257 12.0257 0 0 0 -12.0117-12.0118z"></path>
                    <path d="m202.1 334.5205h-83.3a25.6 25.6 0 0 1 0-51.2h83.3a25.6 25.6 0 1 1 0 51.2zm-83.3-39.2a13.6 13.6 0 0 0 0 27.2h83.3a13.6 13.6 0 1 0 0-27.2z"></path>
                    <path d="m159.96 453.1h-66.6407a6 6 0 0 1 0-12h66.6407a6 6 0 1 1 0 12z"></path>
                    <path d="m246.2 453.1h-66.64a6 6 0 0 1 0-12h66.64a6 6 0 0 1 0 12z"></path>
                    <path d="m332.44 453.1h-66.64a6 6 0 0 1 0-12h66.64a6 6 0 0 1 0 12z"></path>
                    <path d="m418.6807 453.1h-66.6407a6 6 0 1 1 0-12h66.6407a6 6 0 0 1 0 12z"></path>
                </svg>
            </div>
            <div title="Камера в рем зоне">
                <svg className="w-5 h-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="m44.54 14.16c-.29-.18-.65-.21-.96-.07l-10.58 4.89v-3.98c0-.55-.45-1-1-1h-28c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h28c.55 0 1-.45 1-1v-3.98l10.58 4.88c.13.07.28.1.42.1.19 0 .38-.05.54-.16.29-.18.46-.5.46-.84v-18c0-.34-.17-.66-.46-.84zm-13.54 17.84h-26v-16h26zm12-.56-10-4.62v-5.64l10-4.62z"></path>
                </svg>
            </div>
            <div title="Малярныц цех">
                <svg className="w-5 h-5" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path d="m45 1h-3c-.517 0-.949.395-.996.91l-.334 3.682-.686-3.77c-.087-.476-.501-.822-.984-.822h-4c-.446 0-.839.296-.961.725l-.712 2.491-.337-2.358c-.071-.492-.492-.858-.99-.858h-7c-.489 0-.906.354-.986.835l-.014.082-.014-.082c-.08-.481-.497-.835-.986-.835h-4c-.552 0-1 .448-1 1v24c0 .431.275.812.684.949l5.205 1.735c1.828.609 3.066 2.294 3.11 4.212l-.575 2.585c-.945 4.253-1.424 8.619-1.424 12.975 0 3.8.676 7.53 2.01 11.086.776 2.068 2.781 3.458 4.99 3.458s4.214-1.39 4.99-3.458c1.334-3.556 2.01-7.286 2.01-11.086 0-4.356-.479-8.722-1.424-12.975l-.575-2.585c.044-1.918 1.283-3.603 3.11-4.212l5.205-1.735c.409-.137.684-.518.684-.949v-24c0-.552-.448-1-1-1zm-22.847 2 .861 5.165c.08.481.497.835.986.835s.906-.354.986-.835l.861-5.165h5.286l.877 6.142c.066.467.451.824.921.856.477.035.9-.27 1.03-.723l1.793-6.275h2.411l1.851 10.179c.09.492.524.833 1.028.82.5-.022.906-.41.952-.909l.917-10.09h1.087v15h-24v-15zm21.847 17v2h-24v-2zm-4.521 6.786c-2.679.894-4.479 3.391-4.479 6.214 0 .073.008.146.024.217l.6 2.698c.913 4.111 1.376 8.331 1.376 12.541 0 3.559-.634 7.053-1.883 10.384-.484 1.292-1.737 2.16-3.117 2.16s-2.633-.868-3.117-2.16c-1.249-3.331-1.883-6.825-1.883-10.384 0-4.21.463-8.43 1.376-12.542l.6-2.698c.016-.07.024-.143.024-.216 0-2.823-1.8-5.32-4.479-6.214l-4.521-1.507v-1.279h24v1.279z"></path>
                    <path d="m32 53c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z"></path>
                </svg>
            </div>
            <div title="Шиномонтаж">
                <svg className="w-5 h-5" viewBox="-60 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m196.265625 0c-73.328125.0078125-140.535156 40.894531-174.257813 106.011719-33.722656 65.117187-28.332031 143.597656 13.976563 203.492187-21.386719 6.691406-35.9570312 26.488282-35.984375 48.894532v102.402343c.0273438 28.265625 22.933594 51.171875 51.199219 51.199219h290.132812c28.265625-.027344 51.171875-22.933594 51.203125-51.199219v-102.402343c-.03125-22.40625-14.601562-42.203126-35.988281-48.894532 42.308594-59.894531 47.699219-138.375 13.980469-203.492187-33.722656-65.117188-100.929688-106.0039065-174.261719-106.011719zm0 17.066406c68.664063-.027344 131.300781 39.199219 161.257813 100.984375 29.953124 61.785157 21.957031 135.257813-20.59375 189.148438h-61.441407c48.351563-34.464844 68.886719-96.226563 50.792969-152.78125-18.09375-56.554688-70.664062-94.929688-130.039062-94.929688-59.378907 0-111.949219 38.375-130.042969 94.929688-18.089844 56.554687 2.441406 118.316406 50.792969 152.78125h-61.441407c-42.554687-53.898438-50.546875-127.382813-20.578125-189.171875 29.964844-61.789063 92.621094-101.007813 161.292969-100.960938zm-44.160156 290.132813c-53.25-21.183594-83.957031-77.199219-73.171875-133.484375 10.785156-56.289063 60.023437-96.988282 117.332031-96.988282 57.3125 0 106.546875 40.699219 117.332031 96.988282 10.785156 56.285156-19.917968 112.300781-73.171875 133.484375zm223.359375 110.933593h-358.398438v-17.066406h358.398438zm-34.132813 76.800782h-290.132812c-15.515625-.058594-29.042969-10.574219-32.921875-25.601563h246.257812c4.710938 0 8.53125-3.820312 8.53125-8.53125 0-4.714843-3.820312-8.535156-8.53125-8.535156h-247.46875v-17.066406h358.398438v17.066406h-76.796875c-4.714844 0-8.535157 3.820313-8.535157 8.535156 0 4.710938 3.820313 8.53125 8.535157 8.53125h75.585937c-3.878906 15.027344-17.402344 25.542969-32.921875 25.601563zm32.921875-145.066406h-254.789062c-4.710938 0-8.53125 3.820312-8.53125 8.53125 0 4.714843 3.820312 8.535156 8.53125 8.535156h256v17.066406h-358.398438v-17.066406h68.265625c4.714844 0 8.535157-3.820313 8.535157-8.535156 0-4.710938-3.820313-8.53125-8.535157-8.53125h-67.054687c3.878906-15.023438 17.40625-25.542969 32.921875-25.601563h290.132812c15.519531.058594 29.042969 10.578125 32.921875 25.601563zm0 0"></path>
                    <path d="m274.628906 262.058594c7.5-8.953125 13.410156-19.125 17.484375-30.070313v-.050781c.128907-.222656.128907-.472656.238281-.703125 8.382813-22.570313 8.382813-47.398437 0-69.972656-.109374-.230469-.109374-.476563-.238281-.699219-12.785156-34.160156-42.746093-58.960938-78.695312-65.132812h-.085938c-11.285156-2.050782-22.847656-2.050782-34.132812 0h-.085938c-35.945312 6.171874-65.910156 30.972656-78.691406 65.132812-.128906.222656-.128906.46875-.242187.699219-8.378907 22.574219-8.378907 47.402343 0 69.972656.113281.230469.113281.480469.242187.703125v.050781c4.070313 10.945313 9.984375 21.117188 17.484375 30.070313.421875.601562.917969 1.144531 1.476562 1.621094 15.476563 17.675781 36.570313 29.484374 59.730469 33.433593h.085938c11.285156 2.050781 22.847656 2.050781 34.132812 0h.085938c23.160156-3.949219 44.253906-15.757812 59.734375-33.433593.558594-.476563 1.054687-1.019532 1.476562-1.621094zm-156.082031-30.71875 43.585937-25.21875 1.945313 1.121094c1.4375 4.179687 3.671875 8.039062 6.589844 11.363281v2.203125l-43.574219 25.222656c-3.332031-4.609375-6.199219-9.542969-8.546875-14.726562zm-7.613281-35.074219c.015625-6.230469.714844-12.445313 2.082031-18.523437l32.050781 18.523437-32.085937 18.527344c-1.355469-6.082031-2.042969-12.292969-2.046875-18.527344zm16.160156-49.765625 43.574219 25.226562v2.199219c-2.90625 3.328125-5.136719 7.1875-6.5625 11.367188l-1.972657 1.117187-43.613281-25.179687c2.359375-5.1875 5.230469-10.121094 8.574219-14.730469zm146.894531 14.730469-43.589843 25.179687-1.945313-1.117187c-1.433594-4.179688-3.671875-8.042969-6.585937-11.367188v-2.199219l43.570312-25.226562c3.335938 4.613281 6.199219 9.546875 8.550781 14.730469zm7.613281 35.035156c-.019531 6.234375-.714843 12.445313-2.082031 18.527344l-32.054687-18.527344 32.085937-18.523437c1.355469 6.082031 2.042969 12.292968 2.050781 18.523437zm-102.402343 0c0-9.425781 7.640625-17.066406 17.066406-17.066406s17.066406 7.640625 17.066406 17.066406-7.640625 17.066406-17.066406 17.066406-17.066406-7.640625-17.066406-17.066406zm42.667969-44.269531v-37.128906c11.898437 3.789062 22.820312 10.144531 31.992187 18.621093zm-83.191407-18.507813c9.171875-8.476562 20.089844-14.832031 31.992188-18.621093v37.128906zm31.992188 107.050781v37.128907c-11.902344-3.789063-22.820313-10.144531-31.992188-18.621094zm51.199219-19.730468v-2.203125c2.90625-3.324219 5.132812-7.183594 6.5625-11.363281l1.96875-1.121094 43.617187 25.183594c-2.347656 5.183593-5.207031 10.117187-8.535156 14.726562zm31.992187 38.238281c-9.171875 8.476563-20.09375 14.832031-31.992187 18.621094v-37.128907zm-49.058594-147.679687v50.511718l-1.65625.953125c-4.539062-.933593-9.222656-.933593-13.765625 0l-1.644531-.953125v-50.511718c5.671875-.578126 11.390625-.578126 17.066406 0zm-17.066406 169.816406v-50.527344l1.65625-.957031c4.539063.933593 9.222656.933593 13.761719 0l1.648437.957031v50.507812c-5.675781.582032-11.394531.582032-17.066406 0zm0 0"></path>
                    <path d="m68.265625 110.933594c2.6875 0 5.214844-1.265625 6.828125-3.414063 13.820312-17.25 31.074219-31.441406 50.671875-41.667969 2.726563-1.429687 4.472656-4.21875 4.566406-7.296874.097657-3.078126-1.476562-5.96875-4.109375-7.5625-2.636718-1.59375-5.925781-1.644532-8.609375-.132813-21.75 11.394531-40.886719 27.203125-56.171875 46.421875-1.941406 2.585938-2.253906 6.042969-.808594 8.933594 1.445313 2.890625 4.402344 4.71875 7.632813 4.71875zm0 0"></path>
                    <path d="m162.132812 42.667969c0 4.710937-3.820312 8.53125-8.53125 8.53125-4.714843 0-8.535156-3.820313-8.535156-8.53125 0-4.714844 3.820313-8.535157 8.535156-8.535157 4.710938 0 8.53125 3.820313 8.53125 8.535157zm0 0"></path>
                </svg>
            </div>
        </div>
    );
}