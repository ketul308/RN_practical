const RegEx = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    mobile: /^\+[1-9]{2}[0-9]{10}$/,
    lanline: /^\+[1-9]{2}[0-9]{8}$/,
    license: /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/,
}
export { RegEx }