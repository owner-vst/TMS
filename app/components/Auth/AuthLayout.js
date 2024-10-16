function AuthLayout({ children }) {
  return (
    <div>
      <div>header for autrh</div>
      {children}
      <div>footer for auth</div>
    </div>
  );
}

export default AuthLayout;
