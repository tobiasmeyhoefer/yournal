import { SignIn } from "@clerk/nextjs"

const SigningIn = () => {
  return ( 
    <div className="w-full h-full flex justify-center items-center">
      <SignIn/>
    </div>
   );
}
 
export default SigningIn;