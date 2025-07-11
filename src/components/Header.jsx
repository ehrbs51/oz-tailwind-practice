export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <h2 className="text-xl font-bold">OZ코딩스쿨</h2>
      <ul className="flex space-x-4 text-sm">
        <li className="hover:underline cursor-pointer">로그인</li>
        <li className="hover:underline cursor-pointer">회원가입</li>
        <li className="hover:underline cursor-pointer">내클래스</li>
      </ul>
    </header>
  );
}
