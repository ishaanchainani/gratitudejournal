export default function History({ gratitudes }) {
      return (
        <p className="text-white text-6xl p-6">
          
            You were previously grateful for: 
    
          <span className="font-bold">
            {gratitudes.map((g) => ' ' + g.entry) .toString() }(
             
          </span>
        </p>
      );
    }

    
