<script lang="ts">
  export let id: string = "Contact";

  // Configure your Google Form URL here
  // To get entry IDs: Open your Google Form, inspect network tab while submitting, 
  // and look for the entry.XXXXXX fields in the formResponse request
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdsaDiqEukjljq9FdR3ZYzieeYMAvjgFxfi7iSA2XqOpsGHcA/formResponse";
  
  // Map form fields to Google Form entry IDs
  const ENTRY_IDS = {
    name: "entry.1317453594",
    email: "entry.1388830867",
    phone: "entry.878566771",
    message: "entry.896459688"
  };

  let formData = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  let isSubmitting = false;
  let showSuccessModal = false;
  let showErrorModal = false;

  async function handleSubmit(event: Event) {
    event.preventDefault();
    isSubmitting = true;

    try {
      const formDataToSend = new FormData();
      formDataToSend.append(ENTRY_IDS.name, formData.name);
      formDataToSend.append(ENTRY_IDS.email, formData.email);
      formDataToSend.append(ENTRY_IDS.phone, formData.phone);
      formDataToSend.append(ENTRY_IDS.message, formData.message);

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend
      });

      // Mode no-cors means we cannot read response, but no error means success
      showSuccessModal = true;
      
      // Clear form
      formData = {
        name: "",
        email: "",
        phone: "",
        message: ""
      };
    } catch (error) {
      console.error("Submission error:", error);
      showErrorModal = true;
    } finally {
      isSubmitting = false;
    }
  }

  function closeModals() {
    showSuccessModal = false;
    showErrorModal = false;
  }
</script>

<section {id} class="py-24 bg-gray-100 text-astraBlack">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-poppins font-semibold text-astraBlack text-center mb-4">
      Contact Us
    </h2>

    <p class="font-montserrat text-gray-700 text-center max-w-2xl mx-auto mb-14">
      ISDC 2026 registrations are open. For school partnerships, program details, and onboarding support,
      please connect with the ASTRA and Travel De Gama coordination team.
    </p>

    <!-- Enquiry Form -->
    <div class="max-w-2xl mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-8 mb-16">
      <h3 class="font-poppins text-2xl font-semibold text-astraBlack mb-2 text-center">
        Reach out to us
      </h3>
      <p class="font-montserrat text-gray-600 text-sm text-center mb-6">
        Interested in learning more about our programs? Share your details and we will schedule a call to discuss your requirements.
      </p>

      <form on:submit={handleSubmit}>
        <div class="mb-4">
          <label for="name" class="block font-montserrat text-sm font-medium text-gray-700 mb-1">
            Name <span class="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-astraYellow focus:border-astraYellow"
          />
        </div>

        <div class="mb-4">
          <label for="phone" class="block font-montserrat text-sm font-medium text-gray-700 mb-1">
            Phone <span class="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            bind:value={formData.phone}
            required
            placeholder="+91 9876543210"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-astraYellow focus:border-astraYellow"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block font-montserrat text-sm font-medium text-gray-700 mb-1">
            Email <span class="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-astraYellow focus:border-astraYellow"
          />
        </div>

        <div class="mb-6">
          <label for="message" class="block font-montserrat text-sm font-medium text-gray-700 mb-1">
            Message <span class="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            bind:value={formData.message}
            required
            rows="4"
            placeholder="How can Astra help you grow in space learning? Share your school, your grade, and the areas you want to talk about."
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-astraYellow focus:border-astraYellow"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          class="w-full bg-astraYellow text-astraBlack font-montserrat font-semibold py-3 rounded-md hover:bg-yellow-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Request Meeting"}
        </button>
      </form>
    </div>

    <!-- Contact Cards -->
    <div class="grid md:grid-cols-3 gap-8">
      <div class="p-6 bg-astraBlack border border-gray-300 rounded-lg shadow-sm">
        <h3 class="font-poppins text-lg font-semibold text-white mb-1">
          Devendra Saindavise
        </h3>
        <p class="font-montserrat text-gray-100 text-sm mb-2">
          Founder and Director, ASTRA EDU LLP
        </p>
        <p class="font-montserrat text-gray-100 text-sm">
          📞 +91 99705 52916<br />
          📧 <a href="mailto:devendra.s@traveldegama.com" class="text-astraYellow hover:underline font-semibold">devendra.s@traveldegama.com</a>
        </p>
      </div>

      <div class="p-6 bg-astraBlack border border-gray-300 rounded-lg shadow-sm">
        <h3 class="font-poppins text-lg font-semibold text-white mb-1">
          Manjunath Prabhu
        </h3>
        <p class="font-montserrat text-gray-100 text-sm mb-2">
          Founder and Director, ASTRA EDU LLP
        </p>
        <p class="font-montserrat text-gray-100 text-sm">
          📞 +91 96198 88166<br />
          📧 <a href="mailto:manjunath.p@traveldegama.com" class="text-astraYellow hover:underline font-semibold">manjunath.p@traveldegama.com</a>
        </p>
      </div>

      <div class="p-6 bg-astraBlack border border-gray-300 rounded-lg shadow-sm">
        <h3 class="font-poppins text-lg font-semibold text-white mb-1">
          Swati Diwakar
        </h3>
        <p class="font-montserrat text-gray-100 text-sm mb-2">
          Program Director, ASTRA EDU LLP
        </p>
        <p class="font-montserrat text-gray-100 text-sm">
          📞 +91 98920 61876<br />
          📧 <a href="mailto:swati.d@traveldegama.com" class="text-astraYellow hover:underline font-semibold">swati.d@traveldegama.com</a>
        </p>
      </div>
    </div>

    <p class="font-montserrat text-gray-600 text-xs mt-12 text-center">
      Typical response time: 24–48 hours on working days.
    </p>
  </div>
</section>

<!-- Success Modal -->
{#if showSuccessModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
    <div class="bg-white rounded-lg p-8 max-w-md w-full">
      <h3 class="font-poppins text-2xl font-semibold text-astraBlack mb-4">
        Thank You!
      </h3>
      <p class="font-montserrat text-gray-700 mb-6">
        Your request has been successfully submitted. Our team will get back to you within 24–48 hours to schedule a meeting.
      </p>
      <button
        on:click={closeModals}
        class="w-full bg-astraYellow text-astraBlack font-montserrat font-semibold py-2 rounded-md hover:bg-yellow-500 transition"
      >
        Close
      </button>
    </div>
  </div>
{/if}

<!-- Error Modal -->
{#if showErrorModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
    <div class="bg-white rounded-lg p-8 max-w-md w-full">
      <h3 class="font-poppins text-2xl font-semibold text-red-600 mb-4">
        Submission Error
      </h3>
      <p class="font-montserrat text-gray-700 mb-6">
        We encountered an issue submitting your request. Please try again or contact us directly at the email addresses above.
      </p>
      <button
        on:click={closeModals}
        class="w-full bg-astraYellow text-astraBlack font-montserrat font-semibold py-2 rounded-md hover:bg-yellow-500 transition"
      >
        Close
      </button>
    </div>
  </div>
{/if}