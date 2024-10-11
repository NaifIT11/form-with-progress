


type ProgressLimiterProps = {
    value: number;
}

export default function ProgressLimiter({value}: ProgressLimiterProps){
    return (
        <div role="progressbar" aria-valuemax={0} aria-valuemax={50} aria-valuenow={value} className="w-11 h-11 border rounded-full">
            <span className="w-h"></span>
        </div>
    )
}