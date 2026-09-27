interface Props {
    title: string;
}

const SectionBadge = ({ title }: Props) => {
    return (
        <span className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
            <span aria-hidden className="size-[5px] rounded-[1px] bg-primary" />
            {title}
        </span>
    )
};

export default SectionBadge
