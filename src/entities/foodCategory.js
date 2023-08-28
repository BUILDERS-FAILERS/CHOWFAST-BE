export default function foodCategory(name, logo) {
  return {
    getName: () => name,
    getLogo: () => logo
  };
}
