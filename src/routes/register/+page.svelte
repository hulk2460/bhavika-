<script lang="ts">
  import Table from "$lib/Table.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  console.log("hello", data.names);

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<div
class="mt-6 pt-6 w-full max-w-screen-xl p-4 mx-auto rounded-2xl shadow-xl font-bold bg-gradient-to-r dark:bg-slate-200 ring-1 ring-black backdrop-blur-lg flex justify-center items-center"
>
  <form method="POST" action="?/create">
    <label for="website-admin" class="block mb-2 text-xl justify-items-center uppercase font-serif text-gray-900 dark:text-black">Username Or E-mail</label>
    <div class="max-w-screen-xl">
      <span class="inline-flex items-center max-w-screen-md px-7 text-sm rounded-xl text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
      
        
        <input
          class="rounded-full font-serif max-xl:rounded-e-xl bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="name"
          type="text"
          placeholder="Enter E-mail Address "
          name="name"
          required
        />
      </div>
      
      <div class="flex flex-wrap content-center mb-0 max-w-screen-xl font-serif bg-gradient-to-r mt-2 pt-2 w-full p-4 mx-auto rounded-md shadow-sm">
        <div class="max-w-screen-xl">
          <label for="website-admin" class="block mb-2 text-xl justify-items-center uppercase font-serif text-gray-900 dark:text-black">Password</label>
          <span class="inline-flex items-center max-w-screen-md px-7 text-sm rounded-2xl text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <input
          class="rounded-full max-xl:rounded-e-xl bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="email"
          type="text"
          placeholder="Enter Password"
          name="email"
          required
        />
      </div>
      
      <button
        type="submit"
        class="bg-violet-800 w-1/4 content-center flex-shrink hover:bg-blue-400 text-white text-balance font-bold mt-5 ml-6 px-2 rounded"
      >
        Login
      </button>
    </div>
  </form>
  {#if form?.success}
    <!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
    <p class="pt-2">Login successful !!! 🥳  </p>
  {/if}
</div>
<div class="h-32"></div>
