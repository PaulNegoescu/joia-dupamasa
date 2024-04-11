import clsx from "clsx";

export function Button({ children, type = 'submit', className, ...props }) {
  return (
    <button type={type} {...props} className={clsx(className, 'border border-stone-900 rounded px-4 py-2 justify-self-start')}>
      {children}
    </button>
  );
}

export function PrimaryButton({className, ...props}) {
  return (
    <Button {...props} className={clsx(className, 'bg-teal-800 text-white')} />
  )
}
