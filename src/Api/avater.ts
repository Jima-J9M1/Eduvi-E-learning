import { useQuery } from "@tanstack/react-query";



const fetchUser = async (): Promise<AvaterProps> => {
    const response = await fetch(`#`);
    const data=response.json()
    return data
  };


  const  data  = useQuery({
    queryKey: ['test'],
    queryFn:fetchUser
  })

  export default data


  