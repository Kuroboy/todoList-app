
// Database sederhana untuk nyimpen user
const users = [];

// Fungsi untuk mendaftarkan pengguna baru
export const registerUser = (newUser) => {
  // Cek apakah pengguna dengan email yang sama sudah terdaftar
  const existingUser = users.find((user) => user.email === newUser.email);
  if (existingUser) {
    return false; // Jika pengguna sudah terdaftar, registrasi gagal
  }
  
  // Tambahkan pengguna baru ke dalam array pengguna
  users.push(newUser);
  return true; 
};

// Fungsi untuk memeriksa pengguna berdasarkan email dan password
export const checkUser = (email, password) => {
  return users.find((user) => user.email === email && user.password === password);
};

// Contoh pengguna awal
users.push({ email: 'test@example.com', password: 'password' }); 
