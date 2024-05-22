export default function StoCartItemTime() {
    return (  
        <div className="flex flex-row flex-wrap gap-2">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480 C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"></path>
                <path d="M272,96h-32v160c-0.025,4.253,1.645,8.34,4.64,11.36l112,112l22.56-22.56L272,249.44V96z"></path>
            </svg>
            <span>Открыто до 20:00</span>
        </div>
    ); 
}