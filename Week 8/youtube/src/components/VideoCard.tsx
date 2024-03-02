function VideoCard(props: any){
    return (
        <div>
            <img src={props.image} className="rounded-xl"/>

            <div className="grid grid-cols-12 pt-4">

                <div className="col-span-1">
                    <img className="rounded-full w-12 h-12" src={props.thumb_image} />
                </div>

                <div className="col-span-11 pl-5">
                    <div>
                    {props.title}
                    </div>
                    <div className="text-gray-400 text-base">
                        {props.author}
                    </div>
                    <div className="text-gray-400 text-base">
                        {props.views}| {props.timestamp}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VideoCard;