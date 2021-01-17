export default function Nav({title,titleback}) {
    return <div className="row space_between corebox_8 mobilecorebox_16 back_4 center pad_l20 pad_r20 nav">
        <span>Back to: {titleback}</span>
        <span>{title}</span>
        <span>button</span>
    </div>
}