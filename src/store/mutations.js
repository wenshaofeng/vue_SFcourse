export default {
  addGroups(state, name) {
    console.log(name);

    state.excludeGroups.push(name)
  },
}
