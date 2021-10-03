<template>
  <div>
    <div v-for="student in students" :key="student.name">
      <div class="flex">
        <p>{{ student.name }}</p>
        <div v-for="month in student.months" :key="month.name" class="flex">
          <p>{{ month.name }}</p>
          <div>
            <input type="checkbox" v-model="month.week1.monday" />
            <input type="checkbox" v-model="month.week1.tuesday" />
            <input type="checkbox" v-model="month.week1.wednesday" />
            <input type="checkbox" v-model="month.week1.thursday" />
            <input type="checkbox" v-model="month.week1.friday" />
          </div>
          <div>
            <input type="checkbox" v-model="month.week2.monday" />
            <input type="checkbox" v-model="month.week2.tuesday" />
            <input type="checkbox" v-model="month.week2.wednesday" />
            <input type="checkbox" v-model="month.week2.thursday" />
            <input type="checkbox" v-model="month.week2.friday" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        {
          name: "ada",
          months: [
            {
              name: "January",
              week1: {
                monday: true,
                tuesday: true,
                wednesday: false,
                thursday: false,
                friday: true,
              },
              week2: {
                monday: true,
                tuesday: true,
                wednesday: false,
                thursday: false,
                friday: true,
              },
            },
          ],
        },
        {
          name: "nkem",
          month: [
            {
              name: "January",
              week1: {
                monday: true,
                tuesday: true,
                wednesday: false,
                thursday: false,
                friday: true,
              },
              week2: {
                monday: true,
                tuesday: true,
                wednesday: false,
                thursday: false,
                friday: true,
              },
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>