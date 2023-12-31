


const ControlPanel = ({ name, onChange }: ControlPanelProps) => {
  return (
    <form
      className="form"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};



export default ControlPanel;
