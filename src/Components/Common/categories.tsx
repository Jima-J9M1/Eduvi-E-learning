
import NativeSelect from '@mui/material/NativeSelect';

const NativeSelectDemo = () => {
  return (
   
           
        <NativeSelect
          defaultValue={1}
          inputProps={{
            name: '',
          }}
          className="appearance-none"
        >
          <option disabled value={1} >Categories</option>
          <option value='frontend'>FrontEnd</option>
          <option value='backend'>BackEnd</option>
        </NativeSelect>
   
  );
}

export default NativeSelectDemo
