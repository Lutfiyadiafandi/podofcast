const LineHeading = ({ text }: { text: string }) => {
  return (
    <div className="mb-8 flex items-center gap-[30px]">
      <hr className="w-[80px] h-[2.5px] bg-purple" />
      <h5 className="text-type-l font-normal text-purple tracking-[0.2em] uppercase">
        {text}
      </h5>
    </div>
  );
};

export default LineHeading;
