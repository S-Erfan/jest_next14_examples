import TodoSection from "@/components/(Todo)/TodoSection";
import NavbarFixed from "@/components/Header/NavbarFixed";

const TodoPage = () => {
  return (
    <>
      <NavbarFixed  />
      <main className="container mt-6" >
        <section> 
            <TodoSection />
        </section>
      </main>
    </>
  );
};

export default TodoPage;
