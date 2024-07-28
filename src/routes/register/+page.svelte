
<script>
  let email = '';
  let password = '';
  let confirmPassword = '';

  const handleSubmit = () => {
    if (password === confirmPassword) {
      // Call your registration API here
      console.log('Registering with:', { email, password });
    } else {
      alert('Passwords do not match');
    }
  };
</script>

<style>
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  .header {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  .form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
  }
  .form-group input:focus {
    border-color: #007bff;
    outline: none;
  }
  .submit-button {
    width: 100%;
    padding: 0.75rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 1rem;
  }
  .submit-button:hover {
    background-color: #0056b3;
  }
  .footer {
    text-align: center;
    margin-top: 1rem;
  }
  .footer a {
    color: #007bff;
    text-decoration: none;
  }
  .footer a:hover {
    text-decoration: underline;
  }
</style>

<div class="container">
  <div class="header">Create Your Account</div>
  <div class="form-group">
    <label for="email">Enter your Email</label>
    <input type="email" id="email" bind:value={email} placeholder="Enter your email" required />
  </div>
  <div class="form-group">
    <label for="password">Create a Password</label>
    <input type="password" id="password" bind:value={password} placeholder="Create your password" required />
  </div>
  <div class="form-group">
    <label for="confirm-password">Confirm your Password</label>
    <input type="password" id="confirm-password" bind:value={confirmPassword} placeholder="Confirm your password" required />
  </div>
  <button class="submit-button" on:click={handleSubmit}>Register</button>
  <div class="footer">
    <p>Already have an account? <a href="/profiles">Login here</a></p>
  </div>
</div>

