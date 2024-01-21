export const Login = () => {
  return (
    <main className="flex flex-col items-center w-full py-20">
      <h2 className="mb-8 text-center text-label-xl">로그인</h2>
      <form action="/" method="get" className="w-340pxr">
        <fieldset>
          <legend className="sr-only">로그인 양식</legend>
          <div className="">
            <div>
              <label htmlFor="email" className="sr-only">
                아이디를 입력해주세요
              </label>
              <input
                type="email"
                id="email"
                placeholder="아이디를 입력해주세요"
                className="login_input"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                비밀번호를 입력해주세요
              </label>
              <input
                type="current-password"
                id="password"
                placeholder="비밀번호를 입력해주세요"
                className="login_input"
              />
            </div>
          </div>
          <div className="mt-2 text-xs text-right">
            <a href="#">아이디 찾기</a>
            <span className="text-gray-300 mx-1pxr">|</span>
            <a href="#">비밀번호 찾기</a>
          </div>
          <div className="mt-7">
            <button
              type="button"
              id="login"
              className="w-full text-center text-white rounded py-10pxr bg-primary"
            >
              로그인
            </button>
            <button
              id="go_register"
              type="button"
              className="w-full text-center bg-white border rounded mt-10pxr text-primary py-10pxr border-primary"
            >
              회원가입
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
