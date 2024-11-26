import React from 'react'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Input } from '../ui/input'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
        </div>
        <form noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
              <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="sxchln" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">Password</label>
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
              </div>
              <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="ujwtlq" />
            </div>
            <div className="flex items-center justify-between">
              <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>

              </RadioGroup>
            </div>
          </div>
        </form>
        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50" fdprocessedid="ypnx3d">Sign up</button>
        <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
          <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600"><Link to="/login"> Login</Link></a>.
        </p>

      </div>
    </div>
  )
}

export default Signup
