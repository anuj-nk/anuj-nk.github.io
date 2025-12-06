---
title: "DeskFlex - A Cable Management System"
summary: "A spring-loaded, retractable cable-management device designed for dynamic, under-desk cable control."
tagline: "Clean, compact, and effortlessly retractable."
date: 2025-12-01
updated: 2025-12-06
image: "/assets/projects/DeskFlex/hero.png"
tags: ["Prototyping", "Fabrication", "Hardware"]
status: "completed"
role: "Prototyper"
org: "TECHIN 511 Group 14"
team: ["Veronika Sermeno Pon", "Keochonodom Taing", "Anuj Kamasamudram"]
demo: "https://www.youtube.com/watch?v=KCg7JpEvuww"
featured: true
pinned: true
---

## Team

<div class="my-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
  <div class="flex items-start gap-3 md:w-1/3">
    <div class="h-8 w-1 bg-zinc-900 rounded-full"></div>
    <div>
      <p class="font-semibold text-base">Veronika Sermeno Pon</p>
      <p class="text-zinc-700 text-sm leading-tight">
        Spooley sketches, spring/spool prototyping, hi-fidelity model development
      </p>
    </div>
  </div>
  <div class="flex items-start gap-3 md:w-1/3">
    <div class="h-8 w-1 bg-zinc-900 rounded-full"></div>
    <div>
      <p class="font-semibold text-base">Keochonodom Taing</p>
      <p class="text-zinc-700 text-sm leading-tight">
        Clamp/mounting R&D, box enclosure fabrication, medium-fidelity prototyping
      </p>
    </div>
  </div>
  <div class="flex items-start gap-3 md:w-1/3">
    <div class="h-8 w-1 bg-zinc-900 rounded-full"></div>
    <div>
      <p class="font-semibold text-base">Anuj Kamasamudram</p>
      <p class="text-zinc-700 text-sm leading-tight">
        Mechanical design, ratchet/pawl locking system, low-fidelity prototyping
      </p>
    </div>
  </div>
</div>

---

# Description

Modern desks are overloaded with chargers, laptops, power bricks, and peripherals. Cables fall when unplugged, drag on the floor, tangle with other equipment, and become difficult to manage. Under-desk trays hide the clutter but **don’t solve usability** - cables still can't move dynamically.

DeskFlex solves this by introducing:

- a **spring-loaded spool** for automatic rewinding and a **compact under-desk housing** 

DeskFlex is a retractable, spring-loaded cable-management system designed to keep desks clean, organized, and adaptable. Unlike static cable trays or zip-tied setups, DeskFlex allows cables to **extend and retract smoothly**, keeping them accessible without adding clutter. The goal was to design a system that fits under desks or bedside surfaces, reduces cable sagging and tangling, and supports users who frequently rearrange their workspace.  

It's ease of use and out of the way placement means that it manages your cables without creating more objects for you to see! It's also modular allowing for multiple DeskFlex spools to be placed together to manage multiple different cables. 

---

# Gallery

<!-- Hero Row -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <img src="/assets/projects/DeskFlex/hero.png" class="rounded-lg border md:col-span-2" alt="Hero Image">
  <img src="/assets/projects/DeskFlex/final1.png" class="rounded-lg border" alt="Final Prototype">
</div>

<!-- Supporting Grid (images 1–4) -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
  <img src="/assets/projects/DeskFlex/gallery1.png" class="rounded-lg border" alt="Gallery Image 1">
  <img src="/assets/projects/DeskFlex/gallery2.png" class="rounded-lg border" alt="Gallery Image 2">
  <img src="/assets/projects/DeskFlex/gallery3.png" class="rounded-lg border" alt="Gallery Image 3">
  <img src="/assets/projects/DeskFlex/gallery4.png" class="rounded-lg border" alt="Gallery Image 4">
</div>

<!-- Final Row (images 5–7) -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
  <img src="/assets/projects/DeskFlex/gallery5.png" class="rounded-lg border" alt="Gallery Image 5">
  <img src="/assets/projects/DeskFlex/gallery6.png" class="rounded-lg border" alt="Gallery Image 6">
  <img src="/assets/projects/DeskFlex/gallery7.png" class="rounded-lg border" alt="Gallery Image 7">
</div>



---

# Video Demo

<iframe
  src="https://www.youtube-nocookie.com/embed/KCg7JpEvuww?controls=1&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1"
  class="w-full aspect-video rounded-xl"
  frameborder="0"
  allowfullscreen
></iframe>

---

# Process

The DeskFlex development process involved multiple rounds of sketching, low-fidelity prototyping, mechanical exploration, and combined assemblies.  
This section documents every required iteration to get to the end product.

## Early Research & Problem Definition

- Cable clutter was something that affected *every team member* and was reaffirmed as a universal workspace problem.  
- The system needed to be **compact**, **mountable**, and **non-intrusive**.
- Early ideation explored three possible directions:
  - **Spooley retractable cable system** *(Solution 1)*  
  - **Vertical bedside outlet module** *(Solution 2)*  
  - **Modular charging station** *(Solution 3)*  

DeskFlex evolved from **Solution 1**, the spooley system.  

## Concept Sketches

Initial sketches explored early ideas around form, mechanism, and mounting. We experimented with:

- cylindrical spool geometries  
- cable slot positioning  
- under-desk mounting using magnets or snap-fits  
- spring housing designs  

These sketches helped us refine scale, understand cable routing needs, and explore how the housing would interface with the desk.

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
  <img src="/assets/projects/DeskFlex/concept-1.jpg" class="rounded-lg border" alt="Concept Sketch 1">
  <img src="/assets/projects/DeskFlex/concept-2.jpg" class="rounded-lg border" alt="Concept Sketch 2">
  <img src="/assets/projects/DeskFlex/concept-3.jpg" class="rounded-lg border" alt="Concept Sketch 3">
  <img src="/assets/projects/DeskFlex/concept-4.jpg" class="rounded-lg border" alt="Concept Sketch 4">
  <img src="/assets/projects/DeskFlex/concept-5.jpg" class="rounded-lg border" alt="Concept Sketch 5">
  <img src="/assets/projects/DeskFlex/concept-6.jpg" class="rounded-lg border" alt="Concept Sketch 6">
</div>

## Iteration 1 — Size and Shape Exploration

Our earliest work focused on understanding the physical constraints of the system. We experimented with overall size, spool diameter, and the space required for the cable to move freely. Through multiple cardboard and foam prototypes, we converged on an approximate form factor of **9×9 cm** with a spool diameter of **4–5 cm**, which felt both compact and functional.

Originally, we attempted a fully enclosed housing, thinking it would make the product look cleaner. However, this quickly proved impractical — accessing the spool, winding cables, and adjusting internal components became too difficult. As a result, we shifted toward an **open-faced spool design**, which greatly improved usability during prototyping.

We also introduced small **side wings** to provide mounting points for clamp attachment. This early exploration helped us understand not just the size, but how the system needed to interact with users and with desks of different shapes. This also included how we would mount the box to the desk. We decided clamps at this time.

**What we learned:**

- Fully enclosed housings reduce usability and complicate assembly.  
- Clamp geometry and desk tolerance directly dictate box dimensions.  

<div class="my-6">
  <img 
    src="/assets/projects/DeskFlex/iteration-1.jpg" 
    class="w-full rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 1"
  />
</div>


## Iteration 2 — Spring & Spool Mechanism

Much of the mechanical complexity centered around creating a reliable retractable system. To understand how a spring-driven mechanism might behave, we created several circular-spring prototypes and even disassembled a tape measure to observe how commercial retractors maintain tension.

From this research, we began developing a **two-piece spool system**. The outer shell acted as the manual winder, while the inner piece held the spring in place. A key breakthrough was the introduction of a **hexagonal joint**, allowing the inner and outer pieces to rotate together without slipping. This became foundational to our later designs.

This iteration was the first time we began to see how cable tension, rotation, and spring torque all interacted. Understanding these forces early helped guide later prototypes.

**What we learned:**

- Spring torque dramatically affects retracting smoothness and user comfort.  
- Hinge and joint alignment is essential for synchronized rotation of internal and external components.  

<div class="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
  <img 
    src="/assets/projects/DeskFlex/iteration-2.1.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 2 image 1"
  />
  <img 
    src="/assets/projects/DeskFlex/iteration-2.2.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 2 image 2"
  />
</div>



## Iteration 3 — Ratchet & Pawl Locking System

Once we had a rotating spool mechanism, we needed a way to **prevent backward slip** while allowing the cable to be pulled outward freely. This led us to explore a ratchet-and-pawl system.

We began with a rough cardboard prototype that included a serrated wheel and a spring-loaded pawl. Despite its simplicity, the mechanism worked surprisingly well. Pulling the string allowed free rotation in one direction, while the pawl clicked into place to block reverse motion. This confirmed that a ratchet system could meaningfully improve usability.

This was a big milestone: it validated that users could extend cables without the spool instantly rewinding, giving us directional control over motion.

**What we learned:**

- Ratchet engagement tolerances significantly impact reliability and feel.  
- A separate release mechanism would be necessary in future versions for better user control.  

<div class="my-6 flex justify-center">
  <img 
    src="/assets/projects/DeskFlex/iteration-3.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm max-w-md w-full object-contain"
    alt="Iteration 3"
  />
</div>

## Iteration 4 — Spool-to-Housing Mounting

With a functioning spool and early ratchet test, we turned our attention to **how the mechanism would mount under a desk**. We experimented with several approaches:

- sliding-lock mechanisms  
- magnetic quick-release bases  
- bayonet-style twist locks inspired by earlier prototypes  

Each approach had strengths and weaknesses. Sliding locks were simple but prone to jamming if tolerances were even slightly off. Magnetic mounts were elegant and easy to use, but required carefully calibrated magnet strength. The bayonet lock offered secure attachment with intuitive twisting motion, but required more space than we initially expected.

Even though these prototypes were tested independently from the mechanical system, they were crucial in shaping how DeskFlex would eventually integrate with different desk types.

**What we learned:**

- Mounting mechanisms need to be robust even when tested in isolation.  
- Both magnetic and twist-lock systems showed promise for future integration.  

<div class="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <img 
    src="/assets/projects/DeskFlex/iteration-4.1.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 4 image 1"
  />
  <img 
    src="/assets/projects/DeskFlex/iteration-4.2.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 4 image 2"
  />
  <img 
    src="/assets/projects/DeskFlex/iteration-4.3.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 4 image 3"
  />
</div>

## Iteration 5 — Revamp Prototype Design

In order to create a better design for users, we combined several earlier mechanisms into one prototype that we believed would make it easier for users to feed cables through the system. This version utilized a **bayonet twist lock** with a **dedicated cable exit gap**, creating a two-piece enclosure that could twist into place.

- The user would thread the wire through the center of the enclosure  
- The cable end would exit through a side gap, allowing the user to twist-lock the two halves together  
- This enclosure could then attach to the mount, with the spring-loaded mechanism inside so it could spin and retract

**What we learned**

- This form factor was not viable. It was too complicated, lacked internal space for users to insert cables comfortably, and did not leave enough room for the spring mechanism  
- This iteration made us realize we needed a **two-way cable system**, where the cable could move freely without restrictive enclosure geometry  

<div class="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
  <img 
    src="/assets/projects/DeskFlex/iteration-6.1.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 6 image 1"
  />
  <img 
    src="/assets/projects/DeskFlex/iteration-6.2.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 6 image 2"
  />
</div>

## Iteration 6 — Combined Spring & Retractor Exploration

In this stage, we began combining elements from previous prototypes to better understand how the system behaved when components interacted. We experimented with spool shape, internal spacing, and the pin that holds the spring’s center in place.

A key realization during this phase was the importance of **internal clearance**. Without adequate room for the spring to expand and contract, the retracting action became inconsistent. We also explored how the cable could pass through the center of the spool. This is a key insight that would eventually lead us toward developing a two-way cable system in later iterations.

We also tested spinning mechanisms for the design to spin. We found that printing with a gap would've been good enough with some lubricant. We thought about maybe using ball bearing, but that is something we would implement possibly in the future.

This iteration acted as a bridge between basic mechanical experiments and more holistic system design.

**What we learned:**

- Internal spacing must be optimized to support spring motion.  
- A coaxial cable path through the center of the spool is essential for future two-way designs.  

<div class="my-6 flex justify-center">
  <img 
    src="/assets/projects/DeskFlex/iteration-5.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm max-w-md w-full object-contain"
    alt="Iteration 5"
  />
</div>

## Iteration 7 — Two-Way Cable Prototype Design

Building on insights from prior iterations, we developed a new prototype that provided enough internal volume for the **spring**, included a **central pin** to anchor the spring, and created a **free cable path** that made winding easier and more intuitive.

- We learned we needed to route the cable through the center of the spool and out the side, forming the basis of a two-way cable system.
- This design naturally twisted the cable, which we determined would not be a major issue for most cable types.

**What we learned**

- This was the closest we had gotten to a viable final iteration.
- The system needed to be two-piece to support different cable thicknesses and various connector types, improving modularity and usability. 

<div class="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <img 
    src="/assets/projects/DeskFlex/iteration-7.1.png" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 7 image 1"
  />
  <img 
    src="/assets/projects/DeskFlex/iteration-7.2.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 7 image 2"
  />
  <img 
    src="/assets/projects/DeskFlex/iteration-7.3.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 7 image 3"
  />
</div>

## Iteration 8 - Two-Body Latch Mechanism

Now that we had a working medium fidelity prototype. We worked on creating that latch to help make this system easy for users to use. 

**What we learned**
- This was a difficult process of iteration.
- There was a balance between the latch design and thickness and ability to actually hold the two pieces together.

<div class="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
  <img 
    src="/assets/projects/DeskFlex/iteration-8.1.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 8 image 1"
  />
  <img 
    src="/assets/projects/DeskFlex/iteration-8.2.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 8 image 2"
  />
</div>

## Iteration 9 - Mounting Mechanism

Now that our actual spool was working somewhat, we had to go back to mounting the spool to the desk. We decided to scrap the ideas before for a connection to a pip clamped to the desk. The side wings of the design would attach to these attachments connected to the pipes. You can see more of this in the video demo.

**What we learned**
- This allowed the spool to be moved along the pipe.
- The fit was also really secure.
- It was the perfect mounting for the mechanism.

<div class="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
  <img 
    src="/assets/projects/DeskFlex/iteration-9.1.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 9 image 1"
  />
  <img 
    src="/assets/projects/DeskFlex/iteration-9.2.jpg" 
    class="rounded-xl border border-zinc-200 shadow-sm object-cover"
    alt="Iteration 9 image 2"
  />
</div>

# Final Prototype

<div class="my-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

  <img 
    src="/assets/projects/DeskFlex/final1.png"
    alt="DeskFlex Final Prototype"
    class="w-full max-w-xl mx-auto rounded-xl border border-zinc-200 shadow-md object-contain"
  />

  <div>
    <p>The final form of DeskFlex integrates:</p>
    <ul class="list-disc list-inside mt-1 leading-relaxed">
      <li><strong>Spring-loaded retractable spool</strong></li>
      <li><strong>Under-desk mountable housing</strong></li>
      <li><strong>Cleaner, compact enclosure</strong></li>
      <li><strong>Two-piece middle spool design</strong></li>
      <li><strong>Hexagonal internal architecture</strong></li>
    </ul>
    <p class="mt-4">
      This design reflects the lessons from all previous iterations and represents our closest match to the intended user experience.
    </p>
  </div>
</div>

---

# Reflections

### What worked
- Iterative prototyping clarified mechanical dependencies.  
- Open spool geometry improved usability.  
- Hex-joint mechanism ensured smooth rotation.

### Challenges
- Spring torque tuning  
- Housing geometry affecting clamp fit  
- Combining ratchet, spool, and spring into a single assembly  

### What we would do differently
- Improve spring print properties  
- Conduct more physical prototyping earlier  
- Think more end-to-end during sketching

### What we want to try next
- Test multiple different springs  
- Experiment with slip-rings (for two-way cable rotation)  
- Refine rotation mechanism tolerances  
- Evaluate different cable types  

---

# Conclusion

DeskFlex represents much more than a final prototype. It captures the entire journey our team went through as we sketched ideas, built rough models, tested mechanical concepts, and slowly shaped those early thoughts into something real and functional. Each iteration taught us something new about springs, cable behavior, tolerances, and what people actually need in a workspace. The final prototype brings together a retracting spool, a reliable ratchet system, and modular mounting options that create a clean and accessible cable management experience. We are proud of how far the idea has come and we see plenty of room for future improvements as we continue exploring new mechanisms, materials, and ways to make DeskFlex even more intuitive and enjoyable to use.

# Links

- **Fusion 360 Model**  
  https://a360.co/4ogQ9DW

- **Project Video Demo**  
  https://www.youtube.com/watch?v=KCg7JpEvuww

- **Cable Winder and Retractor Inspiration**  
  https://www.amazon.com/Generic-Organiser-Portable-Retractable-Charging/dp/B0DBYQ792Z?th=1

- **Spring Used for this Prototype**  
  https://www.amazon.com/dp/B07LBRSG2Q?ref_=ppx_hzod_title_mob_b_fed_asin_title_0_0