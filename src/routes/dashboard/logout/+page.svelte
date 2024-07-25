<script lang="ts">
    import Table from "$lib/Table.svelte";
  
    /** @type {import('./$types').PageData} */
    export let data;
    console.log("hello", data.names);
  
    /** @type {import('./$types').ActionData} */
    export let form;
  </script>
  
  <Table names={data.names} />

<div class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <header class="text-3xl font-bold mb-8">
        Welcome Back
    </header>
    <form class="w-full max-w-sm bg-white p-8 rounded shadow-md" on:submit={handleSubmit}>
        <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" bind:value={email} placeholder="Enter your email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div class="mb-6">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" bind:value={password} placeholder="Enter your password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div class="flex items-center justify-between">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
            </button>
        </div>
    </form>
    <footer class="mt-8">
        Don't have an account? <a href="/register" class="text-blue-500 hover:underline">Register now</a>
    </footer>
</div>
