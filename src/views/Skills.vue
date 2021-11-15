<template>
  <section id="skills" class="h-screen text-white section overflow-auto  ">
    <div class="container mx-auto h-full px-12">
      <div class="md:py-20">
        <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 md:gap-12 ">
          <ul class="lg:col-span-2">
            <li class="text-3xl mb-4">Front End Skills</li>
            <li>
              <div
                class="mb-3"
                v-for="skill in getSkillsByType('frontend')"
                :key="skill.name"
              >
                <label class="" :for="skill.name">
                  {{ skill.name }}
                </label>
                <div :id="skill.name" class=" progress-bar w-full ">
                  <div :class="getWidth(skill.pernt)" class="progress">
                    <div class="progress-status text-white">
                      {{ skill.pernt }}%
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="lg:col-span-3  ">
            <li class="text-3xl mb-4 ">
              Back End Skills
            </li>
            <li class="lg:grid lg:grid-cols-2 md:gap-x-12">
              <div
                class="mb-3"
                v-for="skill in getSkillsByType('backend')"
                :key="skill.name"
              >
                <label class="" :for="skill.name">
                  {{ skill.name }}
                </label>
                <div :id="skill.name" class=" progress-bar w-full ">
                  <div class="progress" :class="getWidth(skill.pernt)">
                    <div class="progress-status text-white">
                      {{ skill.pernt }}%
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'skills',
  data() {
    return {
      skills: [
        { type: 'frontend', name: 'HTML', pernt: '90' },
        { type: 'frontend', name: 'CSS', pernt: '90' },
        { type: 'frontend', name: 'JavaScript', pernt: '70' },
        { type: 'frontend', name: 'VueJs', pernt: '90' },
        { type: 'frontend', name: 'NuxtJs', pernt: '90' },
        { type: 'backend', name: 'Java', pernt: '80' },
        { type: 'backend', name: 'NodeJs', pernt: '70' },
        { type: 'backend', name: 'C', pernt: '80' },
        { type: 'backend', name: 'CPP', pernt: '80' },
        { type: 'backend', name: 'SpringBoot', pernt: '70' },
        { type: 'backend', name: 'Hibernate', pernt: '80' },
        { type: 'backend', name: 'JPA', pernt: '80' }
      ]
    }
  },
  methods: {
    getSkillsByType(type) {
      return this.skills.filter((skill) => skill.type === type)
    },
    getWidth(per) {
      const w = Math.floor(((per / 10) * 12) / 10)
      return w <= 0 ? `w-1/12` : w > 12 ? `w-full` : `w-${w}/12`
    }
  }
}
</script>

<style scoped>
div > label {
  @apply mb-2;
}
.progress-bar {
  @apply border;
  @apply border-blue-500;
  @apply ring-2;
  @apply ring-white;
  @apply rounded;
  @apply relative;
}
.progress {
  @apply bg-blue-600;
  @apply py-3;
  @apply rounded-r;
}
.progress-status {
  @apply absolute;
  @apply text-center;
  @apply top-0;
  @apply right-4;
}
</style>
