<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;



class AuthController extends Controller
{
    public function authenticate(Request $request){
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required',
            ]);
            // se retorna el 400 para decir que no lleno los campos requeridos
            if ($validator->fails()) {
                return response()->json([ 'message' => $validator->messages(), 'success' => false ], 400);
            }
            /// recojemos los campos
            $res = Auth::attempt([ 'email' => $request['email'], 'password' => $request['password'] ]);
            Log::info($res);
            Log::info("Pruebaa");
            if($res){
                $user = Auth::User();
                $token = $this->updateToken($user);
                ///retornamos token de autentificacion y se logro
                $response['token'] =  $token;
                $response['success'] = true;
                $response['message'] = "Logueado exitosamente";
            }
            else{
                // caso contrario
                $response['success'] = false;
                $response['message'] = "Contraseña o email es incorrecto";
            }
            return $response;

        } catch (\Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 'success' => false ], 500);
        }
    }
     //
     public function encrypted()
     {
         $pass = "123456";
         $encript = Hash::make($pass);
         echo $encript;
     }
    ///creacion de token
    public function updateToken($user)
    {
        $token = Str::random(60);
        $user = User::find($user->id);
        $newToken = hash('sha256', $token);

        $user->forceFill([
            'remember_token' => $newToken,
        ])->update();

        return $newToken;
    }

    public function registerUser()
    {
      return view('register');
    }
    ///registrando datos
    public function register(Request $request)
    {
        try {
            Log::info($request);
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6|confirmed',
            ]);

            if($validator->fails()){
                    return response()->json($validator->errors()->toJson(),400);
            }

            $user = User::create([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'password' => Hash::make($request->get('password')),
            ]);

            $response['success'] = true;
            $response['message'] = "Logueado exitosamente";

        } catch (\Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 'success' => false ], 500);
        }




    }


    public function logout(){
        //logout user
        auth()->logout();
        // redirect to homepage
        return redirect('/');
        }
}
