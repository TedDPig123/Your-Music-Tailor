import bird from '../assets/bird.jpg'

export default function Header(){
    return(
        <div id="header" className="text-[50px] font-helveticaregular tracking-[20px] w-full flex justify-center mt-15">
            <div className='flex gap-4 items-center'>
                <img src={bird} className='w-[60px] rounded-full' alt="logo" />
                <div>SONGBIRD</div>
            </div>
        </div>
    )
}