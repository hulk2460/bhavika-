<script lang="ts">
  import Table from "$lib/Table.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  console.log("hello", data.names);

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<Table names={data.names} />

<div
  class="mt-4 pt-4 w-full max-w-xl p-4 mx-auto rounded-lg shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 ring-1 ring-black backdrop-blur-lg"
>
  <form method="POST" action="?/create">
    <div class="flex flex-wrap -mx-1 mb-0">
      <div class="w-full md:w-4/3 px-3/6  mb-6 md:mb-3">
        <label
          class="block uppercase tracking-wide font-extrabold text-black text-xl mb-3"
          for="grid-city"
        >
          E-mail
        </label>
        <input
          class="appearance-none block w-full bg-white text-black border border-black rounded py-2 px-8 leading-tight focus:outline-none focus:bg-white focus:border-black"
          id="name"
          type="text"
          placeholder="Enter E-mail Address "
          name="name"
          required
        />
      </div>
      
      <div class="flex flex-wrap mb-0 bg-gradient-to-r mt-2 pt-2 w-full max-w-xl p-4 mx-auto rounded-md shadow-sm">
        <div class="w-full md:w-4/3 px-3/6  mb-6 md:mb-3">
        <label
          class="block uppercase tracking-wide font-extrabold text-black text-xl mb-3"
          for="grid-city"
        >
          Password
        </label>
        <input
          class="appearance-none block w-full bg-white text-black border border-black rounded py-2 px-8 leading-tight focus:outline-none focus:bg-white focus:border-black"
          id="email"
          type="text"
          placeholder="Enter Password"
          name="email"
          required
        />
      </div>
      
      <button
        type="submit"
        class="bg-violet-800 w-1/4 flex-shrink hover:bg-blue-400 text-white text-balance font-bold mt-5 ml-6 px-2 rounded"
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
