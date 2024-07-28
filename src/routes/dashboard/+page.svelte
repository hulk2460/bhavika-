<script lang="ts">
  let activePage = 'viewPolicies';
  let policies = [
    { id: 1, number: '12345', provider: 'Provider A', coverage: 'Full Coverage' },
    { id: 2, number: '67890', provider: 'Provider B', coverage: 'Limited Coverage' }
  ];
  let claims = [
    { id: 1, status: 'Pending', details: 'Claim details here...' },
    { id: 2, status: 'Approved', details: 'Claim details here...' }
  ];
</script>

<div class="min-h-screen flex flex-col">
  <header class="bg-gray-800 text-white p-4">
    <nav class="container mx-auto flex justify-between">
      <div class="text-xl font-bold">Insurance Dashboard</div>
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:underline" on:click={() => activePage = 'viewPolicies'}>Policy Management</a></li>
        <li><a href="#" class="hover:underline" on:click={() => activePage = 'submitClaim'}>Claims</a></li>
        <li><a href="#" class="hover:underline" on:click={() => activePage = 'accountSettings'}>Account Settings</a></li>
      </ul>
    </nav>
  </header>

  <div class="flex flex-1">
    <aside class="bg-gray-700 text-white w-64 p-4">
      <ul>
        <li><a href="#" class="block py-2" on:click={() => activePage = 'viewPolicies'}>View Policies</a></li>
        <li><a href="#" class="block py-2" on:click={() => activePage = 'addPolicy'}>Add Policy</a></li>
        <li><a href="#" class="block py-2" on:click={() => activePage = 'submitClaim'}>Submit Claim</a></li>
        <li><a href="#" class="block py-2" on:click={() => activePage = 'viewClaimStatus'}>View Claim Status</a></li>
      </ul>
    </aside>

    <main class="flex-1 p-4">
      {#if activePage === 'viewPolicies'}
        <section>
          <h1 class="text-2xl font-bold mb-4">Your Policies</h1>
          <ul>
            {#each policies as policy (policy.id)}
              <li class="border p-4 mb-4">
                <div class="font-bold">Policy Number: {policy.number}</div>
                <div>Provider: {policy.provider}</div>
                <div>Coverage: {policy.coverage}</div>
                <button class="bg-blue-500 text-white px-4 py-2 mt-2">View Details</button>
              </li>
            {/each}
          </ul>
        </section>
      {/if}

      {#if activePage === 'addPolicy'}
        <section>
          <h1 class="text-2xl font-bold mb-4">Add a New Policy</h1>
          <form class="space-y-4">
            <div>
              <label class="block">Policy Number</label>
              <input type="text" class="border p-2 w-full" placeholder="Policy Number" />
            </div>
            <div>
              <label class="block">Provider</label>
              <input type="text" class="border p-2 w-full" placeholder="Provider" />
            </div>
            <div>
              <label class="block">Coverage Details</label>
              <input type="text" class="border p-2 w-full" placeholder="Coverage Details" />
            </div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2">Add Policy</button>
          </form>
        </section>
      {/if}

      {#if activePage === 'submitClaim'}
        <section>
          <h1 class="text-2xl font-bold mb-4">Submit a New Claim</h1>
          <form class="space-y-4">
            <div>
              <label class="block">Claim Details</label>
              <input type="text" class="border p-2 w-full" placeholder="Claim Details" />
            </div>
            <div>
              <label class="block">Attach Digital Bills</label>
              <input type="file" class="border p-2 w-full" />
            </div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2">Submit Claim</button>
          </form>
        </section>
      {/if}

      {#if activePage === 'viewClaimStatus'}
        <section>
          <h1 class="text-2xl font-bold mb-4">Your Claims</h1>
          <ul>
            {#each claims as claim (claim.id)}
              <li class="border p-4 mb-4">
                <div class="font-bold">Claim ID: {claim.id}</div>
                <div>Status: {claim.status}</div>
                <button class="bg-blue-500 text-white px-4 py-2 mt-2">View Details</button>
              </li>
            {/each}
          </ul>
        </section>
      {/if}

      {#if activePage === 'claimDetails'}
        <section>
          <h1 class="text-2xl font-bold mb-4">Claim Details</h1>
          <div class="border p-4">
            <div class="font-bold">Claim ID: {claim.id}</div>
            <div>Status: {claim.status}</div>
            <div>Details: {claim.details}</div>
            <div class="mt-4">
              <h2 class="font-bold">Update History</h2>
              <ul>
                <li>Update 1: Status changed to Approved</li>
                <li>Update 2: Details updated</li>
              </ul>
            </div>
          </div>
        </section>
      {/if}

      {#if activePage === 'accountSettings'}
        <section>
          <h1 class="text-2xl font-bold mb-4">Account Settings</h1>
          <!-- Add your Account Settings content here -->
        </section>
      {/if}
    </main>
  </div>

  <footer class="bg-gray-800 text-white p-4 text-center">
    © 2024 Insurance Dashboard
  </footer>
</div>
