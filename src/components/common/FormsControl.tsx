export default function FormError({ className, input, meta, ...props }) {
  const hasError = meta.touched && meta.error;
  return (
    <div className={ `border border-1 relative ${ hasError ? "border-gray-800" : "border-gray-300" }` }>
      <input className={className} {...input} {...props} />
      <span className={ `absolute top-1 right-1 text-xs text-gray-500 ${ hasError ? "block" : "hidden" }` }>{meta.error}</span>
    </div>
  );
}
